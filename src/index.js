import './scss/main.scss'
import Vue from 'vue'

Vue.component('cell-item', {
    props: {
        label: {

        },
        data: {

        },
        display: {
            default: 'd-flex'
        }
    },
    template: `
        <div :class="[display]">
            <span :class="['cell-row-label', display]">{{ label }}</span>
            <div class="pdf-line">{{ data }}</div>
        </div>
    `
});

Vue.component('cell-row', {
    props: {
        cells: {

        },
        display: {
            default: 'd-flex'
        }
    },
    template: `
        <div class="row cell-row">
            <div v-for="cell in cells" :class="[cell.class]">
                <cell-item :display="display" :label="cell.label"></cell-item>
            </div>
        </div>
    `,
})

new Vue({
    el: '#app'
});