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
//                this.index = 19;
                this.sentiment = sentiments[this.index];
            }
        }

</script>

<style scoped>
    #sentiment
    {
        font-size: 0.8rem;
        min-width: 600px;
        animation-delay: 2s;
        background-color: #2850a7;
        padding: 30px;
        color: #bdcae4;
        border-radius: 3em;
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

    @media (min-width: 601px)
    {

    }

    @media (max-width: 600px)
    {
        .meta,
        .time
        {
            display:none;
        }
    }

</style>