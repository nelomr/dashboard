import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import store from './store'

const client = new ApolloClient({
  uri: "https://fakeql.com/graphql/06a1052c735445fb0fd86202f6b9d69e"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount('#app')
