<template>
    <div id="description" class="animated fadeInUpBig">
        <a href="https://www.twesix.cn/music">
            <div class="item">音乐</div>
        </a>
        <a href="https://github.com/twesix">
            <div class="item">代码</div>
        </a>
        <a href="https://www.twesix.cn/blog">
            <div class="item">远方</div>
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
    #description
    {
        display: flex;
        justify-content: space-around;
    }
    .animated
    {
        animation-delay: .3s;
    }
    .item
    {

        margin: 0 1rem;
        padding: .5rem 1rem;
        font-size: 1rem;
        border-radius: 2rem;

        transition: .5s;
        background-color: #34a853;
        color: white;
    }

    @media (max-width: 320px)
    {
        .item
        {
            margin: 0 .5rem;
        }
    }

    @media (min-width: 800px)
    {
        .item
        {
            margin: 0 2rem;
            padding: 1rem 2rem;
            font-size: 2rem;
            border-radius: 4rem;
        }
    }
</style>