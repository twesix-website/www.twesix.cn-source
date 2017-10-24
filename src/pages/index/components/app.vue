<template>
    <div id="app">

        <background></background>

        <div id="content">
            <div id="top">
                <_title></_title>
                <description></description>
            </div>
            <div id="bottom">
                <background_bottom></background_bottom>
                <sentiment></sentiment>
            </div>

        </div>
    </div>

    <!-- TODO : add rythm.js effect -->
</template>
<script>

    import background from './background.vue';
    import background_bottom from './background_bottom.vue';
    import description from './description.vue';
    import sentiment from './sentiment.vue';
    import _title from './title.vue';

    export default
        {
            components:
                {
                    background,
                    background_bottom,
                    description,
                    sentiment,
                    _title,
                }
        }

</script>

<style scoped>

    #app
    {
        width: 100%;
        height: 100%;
    }

    #content
    {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #top
    {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #bottom
    {
        position: relative;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-height: 500px)
    {
        #top
        {
            height: 100%;
        }
        #bottom
        {
            display: none;
        }
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
        /*background-color: #f1f1f1;*/
    }

    a,
    a:link,
    a:visited,
    a:hover,
    a:active
    {
        text-decoration: none;
    }
</style>