import './scss/main.scss'
import Vue from 'vue'

Vue.component('cell-row', {
    props: {
        label: {

        },
        data: {

        }
    },
    template: `
        <div class="d-flex">
            <span class="cell-row-label">{{ label }}</span>
            <div class="pdf-line">{{ data }}</div>
        </div>
    `
});

new Vue({
    el: '#app'
});