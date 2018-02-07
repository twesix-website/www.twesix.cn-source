<template>
    <div id="music">
        <div id="panel">
            <div class="background"></div>
            <div id="music_info">
                <h1 class="title" id="music_name">
                    {{ audioName }}
                </h1>
            </div>
            <div id="music_controls">
                <button class="button is-success" @click="switchMusic">&nbsp;&nbsp;<i class="fa fa-fast-forward"></i>&nbsp;&nbsp;</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="button is-danger" @click="musicOff">&nbsp;&nbsp;<i class="fa fa-times"></i>&nbsp;&nbsp;</button>
            </div>
            <audio id="player" controls @canplay="canplay" @ended="ended" :src="musicUrl" crossOrigin="anonymous"></audio>
        </div>
        <canvas id="music_canvas"></canvas>
    </div>
</template>

<script>

    import Visualizer from '../audio-visualization/'

    let playlist = []
    const baseUrl = 'https://api.twesix.cn/music'
    const playListId = 971042549

    ;(async function()
    {
        const result = await $.getJSON(`${baseUrl}/playlist/detail?id=${playListId}`)
        playlist = JSON.parse(JSON.stringify(result.result.tracks))
    })()

    export default
        {
            data: function()
            {
                return {
                    audioName: ' 加载中 ',
                    player: null,
                    musicId: 31473269
                };
            },
            computed:
                {
                    musicUrl: function()
                    {
                        return `https://api.twesix.cn/proxy/?url=http://music.163.com/song/media/outer/url?id=${this.musicId}.mp3`
                    }
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
                        this.player.pause()
                        const music = playlist.shift()
                        if( ! music )
                        {
                            setTimeout(() =>
                            {
                                console.log(`music list loading, wait for 100ms to switch music`)
                                this.switchMusic()
                            }, 100)
                            return
                        }
                        playlist.push(music)
                        this.audioName = music.name
                        this.musicId = music.id
                    },
                    canplay: function()
                    {
                        this.player.play()
                    },
                    ended: function()
                    {
                        this.switchMusic()
                    },
                    musicOff: function()
                    {
                        this.$emit('musicOff')
                    }
                }
        }

</script>

<style scoped>
    #player
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
        overflow: hidden;
    }
    #panel
    {
        height: auto;
        text-align: center;
        position: relative;
        box-sizing: border-box;
    }
    .background
    {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: gray;
        opacity: .5;
        z-index: -1;
    }
    #music_info
    {
        padding-top: 30px;
    }
    #music_name
    {
        color: white;
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