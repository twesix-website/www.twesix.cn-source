<template>
    <div id="background">
        <canvas id="background_canvas"></canvas>
    </div>
</template>
<script>

    import three from '../three.js'

    export default
        {
            data: function()
            {
                return {};
            },
            mounted: function()
            {
                const self = this;
                const canvas = document.getElementById('background_canvas')
                canvas.width = canvas.clientWidth
                canvas.height = canvas.clientHeight

                three(canvas)
            }
        }

</script>

<style scoped>
    #background
    {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
    #background_canvas
    {
        width: 100%;
        height: 100%;
        border: 2px solid #4285f4;
    }
</style>