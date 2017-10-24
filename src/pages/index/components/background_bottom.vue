<template>
    <div id="background_bottom">
        <canvas id="background_bottom_canvas"></canvas>
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
    #background_bottom
    {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
    #background_bottom_canvas
    {
        width: 100%;
        height: 100%;
    }
</style>