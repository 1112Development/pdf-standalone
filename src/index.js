import './scss/main.scss'
import Vue from 'vue'
import CellRow from './components/CellRow.vue'
import CheckBoxes from './components/CheckBoxes.vue'


new Vue({
    el: '#app',
    components: {
        CellRow,
        CheckBoxes,
    }
});