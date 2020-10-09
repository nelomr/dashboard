<template>
  <v-app>
    <v-app-bar app dark color="teal">
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/login">Login</v-btn>
    </v-app-bar>
    <v-main>
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
        <v-card-title class="teal">
          <strong class="subheading">Get connected</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4"
            dark
            icon
            :href="icon.url"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Dashboard demo</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    icons: [
        {'icon':'mdi-linkedin', 'url': 'https://www.linkedin.com/in/nelomartinez'}
      ],
  })
};
</script>
