<template>
  <div class="pdf-page">
      <div class="text-center pdf-title">
        <h2 class="heading-1 text-uppercase">State of nevada</h2>
        <h2 class="heading-1 text-uppercase">individualized education program (IEP)</h2>
      </div>
      <div v-if="visible" class="header">
          <span>Date: </span>
          <span>Student Name: </span>
          <span>Local ID# </span>
          <span>State ID# </span>
          <span>Grade:</span>
          <span>DOB:</span>
          <span>Page: {{ num }} of {{ total }}</span>
      </div>
      <slot></slot>
      <div class="footer">
          <div class="d-flex footer-item">
              <span>{{ date }}</span>
              <span>{{ label }}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        date: {},
        label: {},
        num: {},
        total: {},
        meta: {},
        visible: {}
    },
}
</script>

<style lang="scss" scoped>
    .pdf-page {
        padding-top: 2rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

        .header {
            display: flex;
            font-weight: bold;
            font-size: .75rem;
            justify-content: space-between;
        }
    }

    .footer-item {
        padding-top: 1rem;
        justify-content: space-between;
    }
</style>