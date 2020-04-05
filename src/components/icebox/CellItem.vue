<template>
    <div :class="[display]">
        <span v-if="meta && meta.type === 'label-line'" :class="['cell-row-label', display]">{{ label }}</span>
        <div class="pdf-line" v-if="meta && meta.type === 'label-line'">{{ data }}</div>
        <div v-if="meta && meta.type === 'checkbox'">
            <check-box :label="meta.label" :checked="meta.checked"></check-box>
        </div>
        <div v-if="meta && meta.type === 'text'">
            {{ label }}
        </div>
        <div v-if="meta && meta.type === 'textarea'">
            <p>{{ label }}</p>
            {{ data || 'N/A' }}
        </div>
        <div v-if="meta && meta.type === 'blank'">
        </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox'
export default {
    props: {
        label: {

        },
        data: {

        },
        meta: {

        },
        display: {
            default: 'd-flex'
        }
    },
    components: {
        CheckBox,
    }
}
</script>

<style>

</style>