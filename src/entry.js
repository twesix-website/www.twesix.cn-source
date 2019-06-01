import root from './components/root.vue';

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
