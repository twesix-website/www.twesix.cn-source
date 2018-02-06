<template>
    <div id="music">
        <div id="panel">
            <div id="music_info">
                <h3 class="blue">
                    {{ audioName }}
                </h3>
            </div>
            <div id="music_controls">
                <span class="button-mini white orange-bg" @click="switchMusic">&nbsp;&nbsp;<i class="fa fa-fast-forward"></i>&nbsp;&nbsp;</span>
                <span class="button-mini white red-bg" @click="close">&nbsp;&nbsp;<i class="fa fa-times"></i>&nbsp;&nbsp;</span>
            </div>

            <audio id="player"
                   controls
                   @canplay="canplay"
                   @ended="ended"
                   :src=" audioUrl ? baseUrl + audioUrl : null "
                   crossOrigin="anonymous">
            </audio>

        </div>
        <canvas id="music_canvas"></canvas>
    </div>
</template>

<script>

    import musicList from '../list'
    import { getMusicUrl } from '../list'
    import Visualizer from '../audio-visualization/'

    let playList

    function initPlayList()
    {
        if(musicList.length === 0)
        {
            setTimeout(function()
            {
                initPlayList()
            }, 100)
        }
        playList = JSON.parse(JSON.stringify(musicList))
    }
    initPlayList()

    export default
        {
            data: function()
            {
                return {
                    baseUrl: 'https://api.twesix.cn/proxy/?url=',
                    audioUrl: null,
                    audioName: ' 加载中 ',
                    player: null,
                };
            },
            mounted: function()
            {
                const self = this

                this.player = document.getElementById('player')

                this.switchMusic()

                function visualize()
                {
                    const canvas = document.getElementById('music_canvas')
                    function resize()
                    {
                        canvas.width=canvas.clientWidth
                        canvas.height=canvas.clientHeight
                    }
                    resize()

                    const visualizer=new Visualizer.Spectrum(self.player, canvas);
                    visualizer.start()

                    window.addEventListener('resize', function()
                    {
                        resize()
                        visualizer.resize()
                    })
                }

                visualize()
            },
            methods:
                {
                    switchMusic: async function()
                    {
                        this.player.pause()
                        const music = playList.shift()
                        if( ! music )
                        {
                            setTimeout(() =>
                            {
                                console.log(`music list loading, wait for 100ms to switch music`)
                                this.switchMusic()
                            }, 100)
                            return
                        }
                        this.audioName = music.name
                        if( ! music.url)
                        {
                            const url = await getMusicUrl(music.id)
                            console.log(url)
                            music.url = url
                            musicList.forEach(function(_music, index)
                            {
                                if(_music.id === music.id)
                                {
                                    musicList[index].url = url
                                }
                            })
                        }
                        this.audioUrl = music.url
                        if(playList.length === 0)
                        {
                            initPlayList()
                        }
                    },
                    canplay: function()
                    {
                        this.player.play()
                    },
                    ended: function()
                    {
                        this.switchMusic()
                    },
                    close: function()
                    {
                        this.$emit('musicOff')
                    }
                }
        }

</script>

<style scoped>
    audio
    {
        margin-top: 1rem;
        width: 100%;
        max-width: 1000px;
    }
    #music
    {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;

        display: flex;
        flex-direction: column;
        overflow: scroll;
    }
    #panel
    {
        height: 12rem;
        text-align: center;
    }
    #music_canvas
    {
        flex-grow: 1;
    }
    #music_controls
    {
        margin: 2rem 0;
    }
</style>