import './scss/main.scss'
import Vue from 'vue'

Vue.component('cell-item', {
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

Vue.component('cell-row', {
    props: {
        cells: {

        }
    },
    template: `
        <div class="row cell-row">
            <div v-for="cell in cells" :class="[cell.class]">
                <cell-item :label="cell.label"></cell-item>
            </div>
        </div>
    `,
})

new Vue({
    el: '#app'
});