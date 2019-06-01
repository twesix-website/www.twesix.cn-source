<template>
    <div id="content">
        <div class="content-wrapper">
            <div class="background"></div>
            <div class="content-inner">
                <h1 class="title has-text-centered" id="title">孟政元的个人网站</h1>
                <br>
                <br>
                <div class="columns" id="nav">
                    <div class="is-3 column"></div>
                    <a href="https://github.com/twesix" class="is-2 column has-text-centered link" target="_blank">
                        代码
                    </a>
                    <a @click.prevent="musicOn" href="#" class="is-2 column has-text-centered link">
                        音乐
                    </a>
                    <a href="https://www.jianshu.com/u/a662a629db7d" class="is-2 column has-text-centered link" target="_blank">
                        远方
                    </a>
                    <div class="is-3 column"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default
    {
        name: 'content',
        methods:
            {
                musicOn: function()
                {
                    this.$emit('musicOn')
                }
            }
    }
</script>

<style scoped>
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
        overflow: hidden;
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