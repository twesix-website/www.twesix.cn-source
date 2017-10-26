<template>
    <div id="music">
        <div id="panel">
            <div id="music_info">
                <h3 class="blue">
                    {{ name }}
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
                   :src=" baseUrl + audioName + '.mp3' "
                   crossOrigin="anonymous">
            </audio>

        </div>
        <canvas id="music_canvas"></canvas>
    </div>
</template>

<script>

    const baseUrl = 'https://cn-twesix-static.oss-cn-beijing.aliyuncs.com/homepage/audio/'
    import musicList from '../list'
    import { randomize } from '../util'
    import Visualizer from '../audio-visualization/'

    let playList

    function initPlayList()
    {
        playList = JSON.parse(JSON.stringify(musicList))
        randomize(playList)
        console.log(playList)
    }
    initPlayList()

    export default
        {
            data: function()
            {
                return {
                    baseUrl: baseUrl,
                    audioName: ' - ',
                    player: null,
                };
            },
            computed:
                {
                    name: function()
                    {
                        const parts = this.audioName.split('-')
                        parts.shift()
                        return parts.join('-')
                    },
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
                    switchMusic: function()
                    {
                        this.audioName = playList.pop()
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