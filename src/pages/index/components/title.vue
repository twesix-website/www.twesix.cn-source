<template>
    <div id="title" class="animated fadeInDown">
        <span id="i">
            I
        </span>
        <span id="m">
            m
        </span>
        <span id="name">
            <a href="https://www.twesix.cn/me">孟政元</a>
        </span>
    </div>
</template>
<script>

    export default
        {
            data: function()
            {
                return {};
            }
        }

</script>

<style scoped>
    #title
    {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    #i,
    #m
    {
        font-family: Consolas, "Source Code Pro", monospace, Monospaced, serif, arial, sans-serif;
    }
    #i
    {
        font-weight: lighter;
    }
    #m
    {
        font-weight: bolder;
    }
    /*
    ** TODO : fix the animation issue
    */
    /*#name*/
    /*{*/
        /*animation: .5s nameShake infinite;*/
        /*animation-play-state: paused;*/
    /*}*/
    /*#name:hover*/
    /*{*/
        /*animation-play-state: running;*/
    /*}*/
    /*@keyframes nameShake*/
    /*{*/
        /*25%*/
        /*{*/
            /*padding-top: -10px;*/
        /*}*/
        /*75%*/
        /*{*/
            /*padding-top: 10px;*/
        /*}*/
    /*}*/
    @media (min-width: 501px)
    {
        #i
        {
            font-size: 100px;
        }
        #m
        {
            font-size: 62px;
            margin-right: 50px;
        }
        #name
        {
            font-size: 62px;
        }
    }
    @media (max-width: 500px)
    {
        #i
        {
            font-size: 60px;
        }
        #m
        {
            font-size: 36px;
            margin-right: 30px;
        }
        #name
        {
            font-size: 36px;
        }
    }

    a:link,
    a:visited,
    a:hover,
    a:active
    {
        color:  black;
    }
    a
    {
        text-decoration: none;
    }
</style>