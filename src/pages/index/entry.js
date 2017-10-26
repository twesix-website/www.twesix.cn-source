function debug()
{
    window.addEventListener('error', function(e)
    {
        alert(e.message)
    })

    console.log = function(arg)
    {
        alert(arg)
    }

    console.warn = function(arg)
    {
        alert(arg)
    }

    console.error = function(arg)
    {
        alert(arg.message)
    }
}


import root from './components/app.vue';

const app = new Vue
(
    {
        el: '#app',
        template: '<root></root>',
        name: 'app',
        components:
            {
                root,
            }
    }
);
