<template>
    <div id="music">
        <div id="panel">
            <div id="music_info">
                <h3 class="blue">{{ message }}</h3>
                <h3 class="blue">
                    {{ name }}
                </h3>
            </div>
            <div id="music_controls">
                <span  class="button-mini white green-bg" @click="toggle">&nbsp;&nbsp;<i class="fa" :class="{'fa-play': ! playing, 'fa-pause': playing}"></i>&nbsp;&nbsp;</span>
                <span class="button-mini white orange-bg" @click="switchMusic">&nbsp;&nbsp;<i class="fa fa-fast-forward"></i>&nbsp;&nbsp;</span>
                <span class="button-mini white red-bg" @click="close">&nbsp;&nbsp;<i class="fa fa-times"></i>&nbsp;&nbsp;</span>
            </div>
        </div>

        <audio id="player"
               @canplay="canplay"
               @ended="ended"
               :src=" baseUrl + audioName + '.mp3' "
               crossOrigin="anonymous"></audio>

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
                    playing: false,
                    baseUrl: baseUrl,
                    loading: true,
                    messageLoading: '正在加载，请稍候...',
                    messagePlaying: '正在播放',
                    messagePaused: '已暂停',
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
                    message: function()
                    {
                        if(this.loading)
                        {
                            return this.messageLoading
                        }
                        else
                        {
                            if(this.playing)
                            {
                                return this.messagePlaying
                            }
                            else
                            {
                                return this.messagePaused
                            }
                        }
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
                        canvas.width=canvas.parentElement.clientWidth
                        canvas.height=canvas.parentElement.clientHeight
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
                        if(this.playing)
                        {
                            this.pause()
                        }
                        this.loading = true
                        this.audioName = playList.pop()
                        if(playList.length === 0)
                        {
                            initPlayList()
                        }
                    },
                    canplay: function()
                    {
                        this.loading = false
                        this.play()
                    },
                    ended: function()
                    {
                        this.playing = false
                        this.switchMusic()
                    },
                    play: function()
                    {
                        this.player.play()
                        this.playing = true
                    },
                    pause: function()
                    {
                        this.player.pause();
                        this.playing = false
                    },
                    toggle: function(e)
                    {
                        // e.preventBubble();
                        e.preventDefault();
                        e.stopPropagation();

                        if(this.loading)
                        {
                            return
                        }
                        if(this.player.paused)
                        {
                            this.play()
                        }
                        else
                        {
                            this.pause()
                        }
                    },
                    close: function()
                    {
                        this.$emit('musicOff')
                        this.visualizer.stop()
                    }
                }
        }

</script>

<style scoped>
    audio
    {
        visibility: hidden;
    }
    #music
    {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2
    }
    #panel
    {
        position: relative;
        z-index: 3;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1rem;
    }
    #music_info
    {
        /*width: 100%;*/
        text-align: center;
    }
    #music_controls
    {
        margin-top: 1rem;
        /*width: 100%;*/
        /*text-align: center;*/
    }
    #music_canvas
    {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>