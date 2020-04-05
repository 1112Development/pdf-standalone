<template>
    <div class="row cell-row">
        <div v-for="cell in cells" :class="[cell.class]">
            <cell-item :display="display" :label="cell.label"></cell-item>
        </div>
    </div>
</template>

<script>
import CellItem from './CellItem.vue'
export default {
    props: {
        cells: {

        },
        display: {
            default: 'd-flex'
        }
    },
    components: {
        CellItem
    }
}
</script>

<style>

</style>