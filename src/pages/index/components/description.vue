<template>
    <div id="description">
        <p>
            生活得有代码和音乐
        </p>
        <p>
            还有远方的你
        </p>
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
        text-align: center;
        padding-top: 20px;
    }
    @media (min-width: 501px)
    {
        #description
        {
            font-size: 30px;
        }
    }
    @media (max-width: 500px)
    {
        #description
        {
            font-size: 20px;
        }
    }
</style>