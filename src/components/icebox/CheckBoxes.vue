<template>
  <div><check-box v-for="item in items" :label="item.label"></check-box></div>
</template>

<script>
import CheckBox from './CheckBox.vue'
export default {
    props: {
        items: {}
    },
    components: {
        CheckBox
    }
}
</script>

<style>

</style>