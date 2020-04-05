import './scss/main.scss'
import Vue from 'vue'
import CellLine from './components/CellLine'
import CheckBox from './components/CheckBox'
import PdfPage from './components/PdfPage';

// using global variable to inject...

new Vue({
    el: '#app',
    data: {},
    components: {
        CellLine,
        CheckBox,
        PdfPage,
    }
});