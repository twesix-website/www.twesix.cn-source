<template>
    <div id="app"  class="container">

        <music @musicOff="musicOff" v-if="music" />
        <div id="content" v-if="!music">
            <br>
            <br>
            <br>
            <h1 class="title has-text-centered">孟政元的个人网站</h1>
            <br>
            <br>
            <div class="columns" id="nav">
                <a href="https://github.com/twesix" class="is-3 column has-text-centered link" target="_blank">
                    代码
                </a>
                <a href="#music" class="is-3 column has-text-centered link">
                    音乐
                </a>
                <a @click.prevent="musicOn" href="https://www.jianshu.com/u/a662a629db7d" class="is-3 column has-text-centered link" target="_blank">
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
            <sentiment />
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
                music: true
            }
        },
        components:
            {
                sentiment,
                music,
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
    }
</style>

<style scoped>
    .link
    {
        font-size: 1.5rem;
    }
</style>
