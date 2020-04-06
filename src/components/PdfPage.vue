<template>
  <div class="pdf-page">
      <div>
        <div v-if="visible" class="header pb-3">
            <span>Date: {{ date }}</span>
            <span>Student Name: {{ studentName }}</span>
            <span>Local ID# {{ localId }}</span>
            <span>State ID# {{ stateId }}</span>
            <span>Grade: {{ grade }}</span>
            <span>DOB: {{ dob }}</span>
            <span>Page: {{ num }} of {{ total }}</span>
        </div>
        <div class="text-center pdf-title">
            <h2 class="text-uppercase">State of nevada</h2>
            <h2 class="text-uppercase">individualized education program (IEP)</h2>
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
        visible: {
            default: true,
        }
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
        padding-top: 1.5rem;
        padding-bottom: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

        .pdf-title {
            padding-bottom: 1.4rem;
        }

        .header {
            display: flex;
            font-weight: bold;
            font-size: 1.4rem;
            justify-content: space-between;

            span {
                font-size: inherit;
            }
        }
    }

    .footer-item {
        padding-top: 1.6rem;
        padding-bottom: 1.6rem;
        justify-content: space-between;
        font-size: 1.4rem;
        span {
            font-size: inherit;
        }
    }
</style>