<template>
    <div id="title">
        <span id="i">
            I
        </span>
        <span id="m">
            m
        </span>
        <span id="name" class="animated flipInX">
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
        font-size: 60px;
        font-weight: lighter;
        font-family: Consolas,serif,arial,sans-serif;
    }
    #m
    {
        font-size: 32px;
        margin-right: 30px;
        font-weight: bolder;
        font-family: Consolas,serif,arial,sans-serif;
    }
    #name
    {
        font-size: 32px;
    }
    @media (min-width: 501px)
    {
        #i
        {
            font-size: 100px;
        }
        #m
        {
            font-size: 62px;
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