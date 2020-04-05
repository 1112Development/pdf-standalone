<template>
    <div class="row cell-row">
        <div :key="cell.id" v-for="cell in cells" :class="[cell.class]">
            <cell-item :display="cell.meta && cell.meta.display" :label="cell.label" :meta="cell.meta"></cell-item>
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