<template>
  <v-data-table
    :headers="employeesHeader"
    :items="employees"
    :items-per-page="5"
    :multiSort="true"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array,
      deafult: () =>([])
    }
  },
  computed: {
    employeesHeader() {
      let hdrs = [];
      for (const iterator in this.employees[0]) {
        hdrs.push({text:iterator, value: iterator})
      }
      return hdrs;
    }
  }
}
</script>