<template>
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
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    showPassword: false,
  }),
  methods: {
    showPass() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>