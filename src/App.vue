<template>
  <v-app>
    <v-app-bar app dark color="teal">
      <v-toolbar-title text>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/login">Login</v-btn>
    </v-app-bar>
    <v-main>
        <MainMenu v-if="getPath" />
        <router-view></router-view>
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Dashboard demo</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {
  name: 'App',
  data: () => ({
    icons: [
        {'icon':'mdi-linkedin', 'url': 'https://www.linkedin.com/in/nelomartinez'}
      ]
  }),
  components: {
    MainMenu
  },
  beforeCreate() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    getPath() {

      return this.$parent._route.path === '/dashboard' || this.$parent._route.path === '/';
    }
  }
};
</script>
