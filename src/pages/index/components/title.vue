<template>
    <div id="title">
        <span id="i">
            i
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
    #i
    {
        font-size: 100px;
        font-weight: lighter;
        font-family: Consolas,serif,arial,sans-serif;
    }
    #m
    {
        font-size: 62px;
        margin-right: 50px;
        font-weight: bolder;
        font-family: Consolas,serif,arial,sans-serif;
    }
    #name
    {
        font-size: 62px;
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
        color:  black;
    }
    a:active
    {
        color:  black;
    }
    a
    {
        text-decoration: none;
    }
</style>