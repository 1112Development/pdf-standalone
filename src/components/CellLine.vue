<template>
    <div :class="[display]">
    <span v-if="label" :class="['cell-row-label', display]">{{ label }}</span>
    <div class="pdf-line" :style="{width: line ? line + 'px' : '100%'}">{{ data }}</div>
    </div>
</template>

<script>
export default {
    props: {
        label: {},
        data: {},
        line: {},
        display: {
            default: 'd-flex space-between'
        }
    },
}
</script>

<style>

</style>