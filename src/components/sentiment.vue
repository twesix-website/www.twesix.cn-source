<template>
    <div>
        <div id="sentiment">
            <p class="segment has-text-centered" v-for=" segment in sentiment.content ">
                {{ segment }}
            </p>
            <br>
            <br>
            <br>
            <p class="meta">{{ sentiment.meta }}</p>
            <p class="time">{{ sentiment.time }}</p>
        </div>
    </div>
</template>
<script>

    import sentiments from '../sentiments.js';
    import { random } from '../util';

    export default
        {
            data: function()
            {
                return {
                    sentiment : {},
                    index: null,
                    visible: false
                };
            },
            mounted: function()
            {
                this.index = random(0, sentiments.length - 1)
                this.sentiment = sentiments[this.index]
                console.log(JSON.stringify(this.sentiment))
            }
        }

</script>

<style scoped>
    #sentiment
    {
        color: #cccccc;
    }
    .meta,
    .time
    {
        text-align: right;
    }
</style>