<template>
    <div id="links">

        <!-- blog -->
        <span class="link">
            <a href="https://www.twesix.cn/blog">blog</a>
        </span>

        <!-- github -->
        <span class="link">
            <a href="https://github.com/twesix">github</a>
        </span>

        <!-- music -->
        <span class="link">
            <a href="https://www.twesix.cn/music">music</a>
        </span>

        <!-- resume -->
        <span class="link">
            <a href="https://www.twesix.cn/resume">resume</a>
        </span>

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
        margin-top: 20px;
        margin-bottom: 100px;
        font-family: Consolas,serif,arial,sans-serif;
    }

    /* large screen */
    @media (min-width: 501px)
    {
        .link
        {
            margin: 10px;
            font-size: 30px;
        }
    }
    /* small screen */
    @media (max-width: 500px)
    {
        .link
        {
            margin: 5px;
            font-size: 20px;
        }
    }

    a:link,
    a:visited,
    a:hover,
    a:active
    {
        color:  black;
    }
</style>