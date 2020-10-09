<template>
  <v-app>
    <v-app-bar app dark color="teal">
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>Login</v-btn>
    </v-app-bar>
    <v-main>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="Username"
              label="Username"
              prepend-icon="mdi-account-circle"
            ></v-text-field>
            <v-text-field
              name="password"
              label="password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass()"
            ></v-text-field>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="success">Register</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
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

  components: {
  },

  data: () => ({
    showPassword: false,
    icons: [
        {'icon':'mdi-linkedin', 'url': 'https://www.linkedin.com/in/nelomartinez'}
      ],
  }),
  methods: {
    showPass() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>
