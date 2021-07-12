<template>
  <!-- First image -->
      <div class="align-center pb-10 mb-10">
        <v-container>
          <v-row dense>
            <div order="first" class="pt-15 res col-lg-6">
              <h1>Trello helps teams move work forward.</h1>
              <p class="font-weight-medium mt-2 mb-14">
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </p>
              <v-form class="d-inline-flex">
                <v-text-field
                  background-color="white"
                  placeholder="Email"
                  name="email"
                  dense
                  outlined
                  class="wdt d-none d-sm-flex"
                ></v-text-field>
                <v-btn color="primary" class="ml-5 py-5" width="200"
                  >Sign up-it's free!</v-btn
                >
              </v-form>
            </div>

            <div order="second" class="col-lg-6 hidden-sm-and-down">
              <v-img
                :src="require('~/assets/hero.png')"
                max-width="450"
                max-height="605"
                class="hero"
              ></v-img>
            </div>
          </v-row>
        </v-container>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>