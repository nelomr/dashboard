<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6">
        <h2>Users</h2>
        <ApolloQuery :query="users">
          <template slot-scope="{ result: { loading, error, data } }">
              <span v-if="loading">Loading...</span>
              <span v-else-if="error">An error occured</span>
              <template v-if="data">
                <UsersTable :users="data.users" />
              </template>
          </template>
        </ApolloQuery>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Products</h2>
        <ApolloQuery :query="products">
          <template slot-scope="{ result: { loading, error, data } }">
              <span v-if="loading">Loading...</span>
              <span v-else-if="error">An error occured</span>
              <template v-if="data">
                <ProductTable :products="data.products" />
              </template>
          </template>
        </ApolloQuery>
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
import { GET_PRODUCTS, GET_USERS } from "../graphqueries/queries.js";
import ProductTable from "../components/ProductTable";

import UsersTable from "../components/UsersTable";

import sales from "../data/sales.json";
import SalesChart from "../components/SalesChart";

  export default {
  name: 'Dashboard',
  components:{
    ProductTable,
    UsersTable,
    SalesChart
  },
  data () {
    return {
      users: GET_USERS,
      sales,
      products: GET_PRODUCTS
    }
  }
}
</script>
