<template>
    <div id="app">

        <background></background>

        <div id="content">
            <div id="top">
                <_title :display="title"></_title>
                <description @musicOn="musicOn" @musicOff="musicOff"
                             :display="description">
                </description>
            </div>
            <div id="bottom">
                <music v-if="music"></music>
                <sentiment :display="sentiment"></sentiment>
            </div>

        </div>
    </div>

    <!-- TODO : add rythm.js effect -->
</template>
<script>

    import background from './background.vue';
    import music from './music.vue';
    import description from './description.vue';
    import sentiment from './sentiment.vue';
    import _title from './title.vue';

    export default
        {
            components:
                {
                    background,
                    music,
                    description,
                    sentiment,
                    _title,
                },
            data: function()
            {
                return {
                    title: false,
                    description: false,
                    sentiment: false,
                    music: false
                }
            },
            methods:
                {
                    titleShow: function()
                    {
                        this.title = true
                    },
                    titleHide: function()
                    {
                        this.title = false
                    },
                    descriptionShow: function()
                    {
                        this.description = true
                    },
                    descriptionHide: function()
                    {
                        this.description = false
                    },
                    sentimentShow: function()
                    {
                        this.sentiment = true
                    },
                    sentimentHide: function()
                    {
                        this.sentiment = false
                    },
                    musicOn: function()
                    {
                        this.sentimentHide()
                        this.music = true
                    },
                    musicOff: function()
                    {
                        this.sentimentShow()
                        this.music = false
                    },
                    showAll: function()
                    {
                        const self = this;

                        self.titleShow()
                        setTimeout(function()
                        {
                            self.descriptionShow()
                        }, 300)
                        setTimeout(function()
                        {
                            self.sentimentShow()
                        }, 600)
                    },
                    hideAll: function()
                    {
                        const self = this;

                        self.sentimentHide()
                        setTimeout(function()
                        {
                            self.descriptionHide()
                        }, 200)
                        setTimeout(function()
                        {
                            self.titleHide()
                        }, 400)
                    }
                },
            mounted: function()
            {
                this.showAll()
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

    .blue
    {
        color: #4285f4;
    }
    .blue-bg
    {
        background-color: #4285f4;
    }
    .red
    {
        color: #ea4335;
    }
    .red-bg
    {
        background-color: #ea4335;
    }
    .orange
    {
        color: #fbbc05;
    }
    .orange-bg
    {
        background-color: #fbbc05;
    }
    .green
    {
        color: #34a853;
    }
    .green-bg
    {
        background-color: #34a853;
    }
    .white
    {
        color: white;
    }
    .white-bg
    {
        background-color: white;
    }
</style>