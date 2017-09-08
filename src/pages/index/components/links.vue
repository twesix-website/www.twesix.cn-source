<template>
    <div id="links">

        <span class="link-sep">/</span>

        <!-- blog -->
        <span class="link">
            <a href="https://www.twesix.cn/blog">blog</a>
        </span>
        <span class="link-sep">/</span>

        <!-- github -->
        <span class="link">
            <a href="https://github.com/twesix">github</a>
        </span>
        <span class="link-sep">/</span>

        <!-- music -->
        <span class="link">
            <a href="https://www.twesix.cn/music">music</a>
        </span>
        <span class="link-sep">/</span>

        <!-- resume -->
        <span class="link">
            <a href="https://www.twesix.cn/resume">resume</a>
        </span>
        <span class="link-sep">/</span>

    </div>
</template>
<script>

    export default
        {
        }

</script>

<style scoped>
    #links
    {
        padding: 50px;
        font-size: 30px;
        font-family: Consolas,serif,arial,sans-serif;
    }
    .link
    {
    }
    .link a
    {
        padding: 10px 20px;
        text-decoration: none;
    }
    .link-sep
    {

    }

    a:link
    {
        color:  black;
    }
    a:visited
    {
        color:  black;
    }
    a:hover
    {
        color:  blue;
    }
    a:active
    {
        color:  blue;
    }
</style>