<template>
    <div id="description">
        <div class="left animated fadeInLeft">代码</div>
        <div class="middle animated fadeInUp">音乐</div>
        <div class="right animated fadeInRight">远方</div>
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
    }
    #description div
    {
        margin: 0 15px;
        animation-delay: 1s;
    }
    @media (min-width: 501px)
    {
        #description
        {
            font-size: 30px;
            padding: 60px 0;
        }
    }
    @media (max-width: 500px)
    {
        #description
        {
            font-size: 20px;
            padding: 40px 0;
        }
    }
</style>