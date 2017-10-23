<template>
    <div id="title" class="animated fadeInDown">
        <a href="https://www.twesix.cn/me">
            <h1 id="name">
                <span id="meng">
                    孟
                </span>
                <span id="zheng">
                    政
                </span>
                <span id="yuan">
                    元
                </span>
            </h1>
        </a>
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
    }
    span
    {
        transition: .5s;
    }
    h1
    {
        font-size: 3rem;
        margin-top: 0;
    }
    #title:hover #yuan,
    #meng
    {
        color: #4285f4;
    }
    #zheng
    {
        color: #ea4335;
    }
    #title:hover #meng,
    #yuan
    {
        color: #fbbc05;
    }

</style>