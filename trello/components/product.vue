<template>
  <!-- PRODUCT -->
      <!-- Second -->
      <div class="pt-10 mt-5 product text-center">
        <v-container>
          <v-row align="center" justify="center">
            <h2 class="my-2">
              It’s more than work. It’s a way of working together.
            </h2>
            <p class="py-2">
              Start with a Trello board, lists, and cards. Customize and expand
              with more features as your<br />
              teamwork grows. Manage projects, organize tasks, and build team
              spirit-all in one place.
            </p>
          </v-row>
          <v-row align="center" justify="center" class="pb-4">
            <v-btn outlined color="primary" large class="d-block"
              >Start doing <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </v-row>
          <div align="center" justify="center">
            <v-img
              :src="require('~/assets/mainimg.png')"
              fluid
              max-width="1100"
              max-height="1302"
            >
            </v-img>
          </div>
          <v-row align="center" justify="center" class="col-12">
            <p>
              Join over 1,000,000 teams worldwide that are using Trello to get
              more done.
            </p>
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