<template>
    <div id="title">
        <span id="im">
            Im
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
    #im
    {
        font-size: 120px;
        margin-right: 50px;
    }
    #name
    {
        font-size: 60px;
    }
</style>