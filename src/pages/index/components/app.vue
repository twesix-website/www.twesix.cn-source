<template>
    <div id="content">
        <div id="top">
            <_title></_title>
            <description></description>
            <!--<links id="links"></links>-->
        </div>
        <div id="bottom">
            <sentiment></sentiment>
        </div>

    </div>

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
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #bottom
    {
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