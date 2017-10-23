<template>
    <div id="description" class="animated fadeInUp">
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
        animation-delay: 1s;
    }
    .item
    {

        margin: 0 1rem;
        padding: .5rem 1em;
        font-size: 1rem;
        border: 1px solid #34a853;
        border-radius: 2rem;

        background-color: #34a853;
        color: white;
    }
</style>