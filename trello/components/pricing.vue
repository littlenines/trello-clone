<template>
  <!-- PRICING -->
      <div class="checkout mb-12">
        <v-container>
          <v-card flat tile color="#efecfe" class="col-md-12">
            <v-row>
              <!-- First -->
              <div class="col-md-6">
                <v-row>
                  <v-img
                    class="hidden-sm-and-down"
                    :src="require('~/assets/five.png')"
                    fluid
                    max-height="191"
                    max-width="125"
                  ></v-img>
                  <div class="col-lg-9 d-flex flex-column mb-4 mb-lg-0">
                    <h3>See our pricing</h3>
                    <p>
                      Whether you’re a team of 2 or 2,000,<br />
                      there’s a Trello tailor-made for your organization.
                    </p>
                    <v-btn
                      outlined
                      color="primary"
                      large
                      class="d-block"
                      width="150"
                      >Trello pricing</v-btn
                    >
                  </div>
                </v-row>
              </div>

              <!-- Second -->
              <div class="col-md-6">
                <v-row>
                  <div class="d-lg-flex col-lg-3 align-items-start">
                    <v-img
                      class="hidden-sm-and-down"
                      :src="require('~/assets/six.png')"
                      fluid
                      max-height="191"
                      max-width="149"
                    ></v-img>
                  </div>
                  <div class="col-lg-9 d-flex flex-column mb-4 mb-lg-0">
                    <h3>Take a Trello tour</h3>
                    <p>
                      Explore the world of boards and beyond in Trello. Dive
                      deeper into our most popular features.
                    </p>
                    <v-btn
                      outlined
                      color="primary"
                      large
                      class="d-block"
                      width="150"
                      >Tour trello</v-btn
                    >
                  </div>
                </v-row>
              </div>
            </v-row>
          </v-card>
        </v-container>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>