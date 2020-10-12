import Vue from 'vue'
import Vuex from 'vuex'
import { GET_USERS, GET_PRODUCTS } from "../graphqueries/queries.js";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://fakeql.com/graphql/06a1052c735445fb0fd86202f6b9d69e"
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    products: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await client.query({
        query: GET_USERS
      });
      commit('setUsers', response.data.users);
    },
    async fetchProducts({ commit }) {
      const response = await client.query({
        query: GET_PRODUCTS
      });
      commit('setProducts', response.data.products);
    }
  },
})
