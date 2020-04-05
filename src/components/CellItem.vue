<template>
    <div :class="[display]">
        <span :class="['cell-row-label', display]">{{ label }}</span>
        <div class="pdf-line">{{ data }}</div>
    </div>
</template>

<script>
export default {
    props: {
        label: {

        },
        data: {

        },
        display: {
            default: 'd-flex'
        }
    },
}
</script>

<style>

</style>