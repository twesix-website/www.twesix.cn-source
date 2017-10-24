<template>
    <transition
            @before-enter="beforeEnter"
            @after-leave="afterLeave"
            appear
            appearToClass="animated fadeInUpBig"
            enterToClass="animated fadeInUpBig"
            leaveToClass="animated fadeOutDownBig">
        <div v-show="display" id="sentiment"  class="hidden" :class="{ visible: visible }">
            <p class="segment" v-for=" segment in sentiment.content ">
                {{ segment }}
            </p>
            <p class="meta">--- {{ sentiment.meta }}</p>
            <p class="time">{{ sentiment.time }}</p>
        </div>
    </transition>
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
            props: ['display'],
            methods:
                {
                    randomSentiment: function()
                    {
                        this.index = random(0, sentiments.length - 1)
                        this.sentiment = sentiments[this.index]
                    },
                    beforeEnter: function()
                    {
                        this.randomSentiment()

                        const self = this
                        setTimeout(function()
                        {
                            self.visible = true
                        }, 30)
                    },
                    afterLeave: function()
                    {
                        this.visible = false
                    }
                }
        }

</script>

<style scoped>

    .visible
    {
        visibility: visible !important;
    }

    .hidden
    {
        visibility: hidden;
    }

    #sentiment
    {
        /*animation-duration: .5s;*/

        font-size: 0.8rem;
        min-width: 600px;
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