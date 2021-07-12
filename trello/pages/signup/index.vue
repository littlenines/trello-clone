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
          Sign up for your account
        </v-card-title>
        <v-form>
          <v-text-field
            name="email"
            v-model="email"
            placeholder="Enter email"
            outlined
            dense
            class="wdt mx-auto"
          ></v-text-field>

          <v-text-field
            name="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            outlined
            dense
            class="wdt mx-auto"
          ></v-text-field>

          <v-text-field
            name="passwordCheck"
            v-model="checker"
            type="password"
            placeholder="Re-enter password"
            outlined
            dense
            class="wdt mx-auto"
          ></v-text-field>

          <v-btn color="success" class="wdt mb-5" @click="signup"
            >Continue</v-btn
          >
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
  layout: 'signup',
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
    signup() {
      if (this.checker === this.password) {
        this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.snackbar = true;
            this.snackbarText = "User successfully created";
          })
          .catch((error) => {
            this.snackbar = true;
            this.snackbarText = error.message;
          });
      } else {
        this.snackbar = true;
        this.snackbarText = "Wrong password";
      }
    },
  },
};
</script>

<style>
</style>