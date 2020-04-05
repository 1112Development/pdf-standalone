import './scss/main.scss'
import Vue from 'vue'
import CellRow from './components/CellRow.vue'
import CheckBoxes from './components/CheckBoxes.vue'
import PdfPage from './components/PdfPage';

// using global variable to inject...

new Vue({
    el: '#app',
    data: {
        pages: window.PAGES,
    },
    components: {
        CellRow,
        CheckBoxes,
        PdfPage,
    }
});