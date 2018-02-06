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
