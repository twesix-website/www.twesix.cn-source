<template>
    <transition
            @before-enter="beforeEnter"
            @after-leave="afterLeave"
            appear
            appearToClass="animated fadeInUpBig"
            enterToClass="animated fadeInUpBig"
            leaveToClass="animated fadeOutDownBig">
        <div v-show="display" id="description"  class="hidden" :class="{ visible: visible }">
            <a href="https://github.com/twesix" target="_blank">
                <div class="item green-bg white">代码</div>
            </a>
            <a href="#">
                <div class="item red-bg white" @click="music">{{ musicOn ? '不想听了' : '音乐' }}</div>
            </a>
            <a href="https://www.twesix.cn/blog" target="_blank">
                <div class="item orange-bg white">远方</div>
            </a>
        </div>
    </transition>
</template>
<script>

    export default
        {
            data: function()
            {
                return {
                    visible: false,
                    musicOn: false,
                };
            },
            props: ['display'],
            methods:
                {
                    beforeEnter: function()
                    {
                        const self = this

                        self.visible = false
                        setTimeout(function()
                        {
                            self.visible = true
                        }, 30)
                    },
                    afterLeave: function()
                    {
                        this.visible = false
                    },
                    music: function(e)
                    {
                        e.preventDefault()
                        if(this.musicOn)
                        {
                            this.$emit('musicOff')
                            this.musicOn = false
                        }
                        else
                        {
                            this.$emit('musicOn')
                            this.musicOn = true
                        }
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

    #description
    {
        /*animation-duration: .5s;*/

        display: flex;
        justify-content: space-around;
    }
    .item
    {
        margin: 0 1rem;
        padding: .5rem 1rem;
        font-size: 1rem;
        border-radius: 2rem;

        transition: .5s;
    }
    .item:hover
    {
        opacity: .8
    }

    @media (max-width: 320px)
    {
        .item
        {
            margin: 0 .5rem;
        }
    }

    @media (min-width: 800px)
    {
        .item
        {
            margin: 0 2rem;
            padding: 1rem 2rem;
            font-size: 2rem;
            border-radius: 4rem;
        }
    }
</style>