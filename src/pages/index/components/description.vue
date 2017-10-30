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
                <div class="button item green-bg white">代码</div>
            </a>
            <a href="#">
                <div class="button item red-bg white" @click="music">音乐</div>
            </a>
            <a href="http://www.jianshu.com/u/a662a629db7d" target="_blank">
                <div class="button item orange-bg white">远方</div>
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
                        this.$emit('musicOn')
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
</style>