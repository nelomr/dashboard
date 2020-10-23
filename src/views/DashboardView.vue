<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12" md="4">
        <h2>Users with ApolloQuery</h2>
        <ApolloQuery :query="users">
          <template slot-scope="{ result: { loading, error, data } }">
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="teal"
              ></v-progress-circular>
              <span v-else-if="error">An error occured</span>
              <template v-if="data">
                <UsersTable :users="data.users" />
              </template>
          </template>
        </ApolloQuery>
      </v-col>
      <v-col cols="12" md="4">
        <h2>Users with Vuex</h2>
        <v-progress-circular
          v-if="getUsers.length == 0"
          indeterminate
          color="teal"
        ></v-progress-circular>
        <UsersTable v-if="getUsers" :users="getUsers" />
      </v-col>
      <v-col cols="12" md="4">
        <h2>Products</h2>
        <ApolloQuery :query="products">
          <template slot-scope="{ result: { loading, error, data } }">
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="teal"
              ></v-progress-circular>
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
  },
  computed: {
    getUsers() {
      return this.$store.state.users;
    }
  }
}
</script>

<style lang="postcss" scoped>
  .container {
    max-width: calc(100% - 56px);
    margin-right: 0;
  }
</style>
