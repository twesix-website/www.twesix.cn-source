<template>
    <div>
        <div id="sentiment">
            <p class="segment has-text-centered" v-for=" segment in sentiment.content ">
                {{ segment }}
            </p>
            <!--<p class="meta">-&#45;&#45; {{ sentiment.meta }}</p>-->
            <!--<p class="time">{{ sentiment.time }}</p>-->
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
                console.log(this.sentiment)
            }
        }

</script>

<style scoped>
    .segment
    {
        color: darkgray;
    }
</style>