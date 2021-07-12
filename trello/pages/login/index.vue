<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <NuxtLink to="./">
        <v-img
          :src="require('../../assets/trello.png')"
          max-width="200"
          max-height="60"
          class="my-10"
        ></v-img
      ></NuxtLink>
      <v-card class="elevation-4 text-center">
        <v-card-title class="align-center justify-center">
          Log in to Trello
        </v-card-title>
        <v-form>
          <v-text-field
            name="email"
            placeholder="Enter email"
            outlined
            dense
            class="wdt mx-auto"
            v-model="auth.email"
          ></v-text-field>

          <v-text-field
            name="password"
            placeholder="Enter password"
            type="password"
            outlined
            dense
            class="wdt mx-auto"
            v-model="auth.password"
          ></v-text-field>

          <v-btn color="success" class="wdt mb-5" @click="login">Log in</v-btn>
        </v-form>
      </v-card>
      <v-snackbar :timeout="2000" v-model="snackbar" absolute bottom center>
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      snackbar: false,
      snackbarText: "No message",
      auth: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      // Firebase auth
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then(() => {
          //signed in
          $nuxt.$router.push("/board");
        })
        .catch((error) => {
          this.snackbar = true;
          this.snackbarText = error.message;
        });
    },
  },
};
</script>

<style>
</style>