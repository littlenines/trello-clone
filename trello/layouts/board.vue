<template>
  <v-app>
    <top />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import top from "../components/top.vue";

export default {
  components: {
    top,
  },
};
</script>

<style>
</style>