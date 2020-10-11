<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6">
       <DessertsTable :desserts="desserts" />
      </v-col>
      <v-col cols="12" md="6">
        <EmployeesTable :employees="employees" />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" md="4" v-for="(sale, saleIndex) in sales" :key="`sale${saleIndex}`">
        <SalesChart :sale="sale" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import employees from "../data/employees.json";
import EmployeesTable from "../components/EmployeesTable";

import desserts from "../data/desserts.json";
import DessertsTable from "../components/DessertsTable";

import sales from "../data/sales.json";
import SalesChart from "../components/SalesChart";

  export default {
  name: 'Dashboard',
  components:{
    EmployeesTable,
    DessertsTable,
    SalesChart
  },
  data () {
    return {
      employees,
      desserts,
      sales
    }
  }
}
</script>
