<template>
    <div id="sentiment" class="animated fadeInDown">
        <p class="segment" v-for=" segment in sentiment.content ">
            {{ segment }}
        </p>
        <p class="meta">--- {{ sentiment.meta }}</p>
        <p class="time">{{ sentiment.time }}</p>
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
                };
            },
            mounted: function()
            {
                this.index = random(0, sentiments.length - 1);
                this.sentiment = sentiments[this.index];
            }
        }

</script>

<style scoped>
    #sentiment
    {
        font-family: valentine;
        font-size: 20px;
        min-width: 500px;
        animation-delay: 2s;
    }
    .segment
    {
        text-align: center;
    }
    .meta
    {
        text-align: right;
    }
    .time
    {
        text-align: right;
    }

    @media (max-width: 500px)
    {
        .meta,
        .time
        {
            display:none;
        }
    }
</style>