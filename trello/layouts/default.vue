<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-main>
        <hero />
        <product />
        <features />
        <pricing />
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import hero from '../components/hero.vue';
import product from '../components/product.vue';
import features from '../components/features.vue';
import pricing from '../components/pricing.vue';

export default {
  components: {
    hero,
    product,
    features,
    pricing,
  }
}
</script>

<style>

</style>