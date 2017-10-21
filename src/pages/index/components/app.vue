<template>
    <div id="content">
        <div id="top">
            <sentiment></sentiment>
        </div>
        <div id="bottom">
            <_title></_title>
            <description></description>
            <links id="links"></links>
        </div>

    </div>

    <!-- TODO : fix the font size problem of sentiments on mobile device -->
    <!-- TODO : add rythm.js effect -->
</template>
<script>

    import _title from './title.vue';
    import sentiment from './sentiment.vue';
    import description from './description.vue';
    import links from './links.vue';

    export default
        {
            components:
                {
                    _title,
                    description,
                    sentiment,
                    links,
                }
        }

</script>

<style scoped>

    #content
    {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #top
    {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
    #bottom
    {
        display: flex;
        flex-grow: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

<style>
    html,
    body
    {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>