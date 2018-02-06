<template>
    <transition
            @before-enter="beforeEnter"
            @after-leave="afterLeave"
            appear
            appearToClass="animated fadeInUpBig"
            enterToClass="animated fadeInUpBig"
            leaveToClass="animated fadeOutDownBig">
        <div v-if="display" id="title" class="hidden" :class="{ visible: visible }">
            <a href="https://www.twesix.cn/me">
                <h1 id="name" class="blue">
                <span id="meng">
                    孟
                </span>
                    <span id="zheng">
                    政
                </span>
                    <span id="yuan">
                    元
                </span>
                </h1>
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
                    visible: false
                }
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

    #title
    {
        /*animation-duration: .5s;*/

        display: flex;
        justify-content: center;
    }


    #name
    {
        transition: .5s;
    }
    #name:hover
    {
        opacity: .8
    }

    h1
    {
        font-size: 3rem;
        margin-top: 0;
    }

    @media (min-width: 800px)
    {
        h1
        {
            font-size: 5rem;
        }
    }

    @media (min-width: 1200px)
    {
        h1
        {
            font-size: 7rem;
        }
    }

</style>