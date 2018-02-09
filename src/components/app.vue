<template>
    <div id="app" class="has-text-centered" :style="{backgroundImage: backgroundImageUrl}">

        <music @musicOff="musicOff" v-if="music" />
        <div id="content" v-if="!music">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="content-wrapper">
                <div class="background"></div>
                <div class="content-inner">
                    <h1 class="title has-text-centered" id="title">孟政元的个人网站</h1>
                    <br>
                    <br>
                    <div class="columns" id="nav">
                        <a href="https://github.com/twesix" class="is-3 column has-text-centered link" target="_blank">
                            代码
                        </a>
                        <a @click.prevent="musicOn" href="#" class="is-3 column has-text-centered link">
                            音乐
                        </a>
                        <a href="https://www.jianshu.com/u/a662a629db7d" class="is-3 column has-text-centered link" target="_blank">
                            远方
                        </a>
                        <a href="https://wvw.twesix.cn" class="is-3 column has-text-centered link" target="_blank">
                            所爱
                        </a>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <sentiment id="sentiment" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sentiment from './sentiment.vue'
    import music from './music.vue'

    export default
    {
        data: function()
        {
            return {
                music: false,
                day: false
            }
        },
        beforeMount: function()
        {
            let day = new Date().getDay()
            if(day < 10)
            {
                day = '0' + day
            }
            this.day = day
        },
        components:
            {
                sentiment,
                music,
            },
        computed:
            {
                backgroundImageUrl: function()
                {
                    return `url(https://cn-twesix-static.oss-cn-beijing.aliyuncs.com/homepage/background-images/${this.day}.jpg)`
                }
            },
        methods:
            {
                musicOn: function()
                {
                    this.music = true
                },
                musicOff: function()
                {
                    this.music = false
                }
            }
    }
</script>

<style>
    html,
    body,
    #app
    {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>

<style scoped>
    #app
    {
        background: no-repeat fixed;
        background-size: cover;
    }
    .link
    {
        font-size: 1.5rem;
    }
    .content-wrapper
    {
        position: relative;
        z-index: 1;
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
    }
    #content
    {
        overflow-y: scroll;
        width: 100%;
        height: 100%;
    }
    .content-inner
    {
        box-sizing: border-box;
        padding: 30px;
        position: relative;
        z-index: 2;
    }
    #title
    {
        color: #cccccc;
    }
    a:link,
    a:active,
    a:visited,
    a:hover
    {
        color: #cccccc
    }
</style>
