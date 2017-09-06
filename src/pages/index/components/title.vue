<template>
    <div id="title">
        <span id="i">
            i
        </span>
        <span id="m">
            m
        </span>
        <span id="name">
            孟政元
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
</style>