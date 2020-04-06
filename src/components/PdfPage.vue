<template>
  <div class="pdf-page">
      <div>
        <div class="text-center pdf-title">
            <h2 class="heading-1 text-uppercase">State of nevada</h2>
            <h2 class="heading-1 text-uppercase">individualized education program (IEP)</h2>
        </div>
        <div v-if="visible" class="header">
            <span>Date: {{ date }}</span>
            <span>Student Name: {{ studentName }}</span>
            <span>Local ID# {{ localId }}</span>
            <span>State ID# {{ stateId }}</span>
            <span>Grade: {{ grade }}</span>
            <span>DOB: {{ dob }}</span>
            <span>Page: {{ num }} of {{ total }}</span>
        </div>
        <slot></slot>
      </div>
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
    data() {
        // PLACEHOLDER FOR PROPS PENDING REAL DATA
        return {
            date: '1',
            studentName: '1',
            localId: '1',
            stateId: '1',
            grade: '1',
            dob: '01/22/2020',
        }
    }
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