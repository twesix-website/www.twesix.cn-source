<template>
    <div id="root" class="has-text-centered" :style="{backgroundImage: backgroundImageUrl}">

        <div v-if="playingMusic"><music @musicOff="musicOff" /></div>
        <div v-else="playingMusic"><my-navigation @musicOn="musicOn" /></div>

    </div>
</template>

<script>
    import music from './music.vue'
    import myNavigation from './my-navigation.vue'

    export default
    {
        name: 'root',
        data: function()
        {
            return {
                playingMusic: false,
                day: false
            }
        },
        beforeMount: function()
        {
            let day = new Date().getDate()
            if(day < 10)
            {
                day = '0' + day
            }
            this.day = day
        },
        components:
            {
                music,
                'my-navigation': myNavigation
            },
        computed:
            {
                backgroundImageUrl: function()
                {
                    return `url(https://cn-twesix-static.oss-cn-beijing.aliyuncs.com/homepage/background-images/${this.day}.jpg)`
                }
            },
        methods:
            {
                musicOn: function()
                {
                    this.playingMusic = true
                },
                musicOff: function()
                {
                    this.playingMusic = false
                }
            }
    }
</script>

<style>
    html,
    body
    {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>

<style scoped>
    #root
    {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background: no-repeat fixed;
        background-size: cover;
    }
</style>
