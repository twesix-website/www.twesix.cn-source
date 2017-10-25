<template>
    <div @click="toggle" id="music">
        <div id="music_info">
            <p v-if="loading">{{ loadingMessage }}</p>
            <p v-else
               v-for="message in audioName.split('-').slice(0, 2).reverse()">
                {{ message.trim() }}
            </p>
        </div>

        <audio id="player"
               @canplay="canplay"
               :src=" baseUrl + audioName + '.mp3' "
               crossOrigin="anonymous"></audio>

        <canvas id="music_canvas"></canvas>
    </div>
</template>
<script>

    const baseUrl = 'https://cn-twesix-static.oss-cn-beijing.aliyuncs.com/homepage/audio/'
    import musicList from '../audio-visulization/list'
    import {random} from '../util'

    export default
        {
            data: function()
            {
                return {
                    baseUrl: baseUrl,
                    loading: true,
                    loadingMessage: '正在加载，请稍候...',
                    audioName: null,
                    player: null,
                    visualizer: null
                };
            },
            mounted: function()
            {
                const self = this

                this.player = document.getElementById('player')

                this.switchMusic()

                const canvas = document.getElementById('music_canvas')
                canvas.width=canvas.parentElement.clientWidth
                canvas.height=canvas.parentElement.clientHeight

                const ctx = canvas.getContext('2d')
                this.visualizer=new Visualizer(this.player, ctx);

                const meterWidth = 20
                const gapWidth = 2
                const meterNum = parseInt(canvas.width)/(meterWidth + gapWidth)

                const capHeight=2
                const capFallSpeed=3
                const capPositions=[]

                const capStyle='#ff2f3f'
                const gradient=ctx.createLinearGradient(0,0,0,1600)
                gradient.addColorStop(1,'#22ff7d')
                gradient.addColorStop(0.5,'#55caff')
                gradient.addColorStop(0,'#a84cff')

            },
            methods:
                {
                    switchMusic: function()
                    {
                        this.loading = true
                        this.audioName = musicList[random(0, musicList.length - 1)]
                    },
                    canplay: function()
                    {
                        this.loading = false
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
                            this.player.play()
                        }
                        else
                        {
                            this.player.pause();
                        }
                    },
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
    }
    #music_info
    {
        width: 100%;
        text-align: center;
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