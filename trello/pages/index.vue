<template>
  <v-app>
    <v-app-bar
      app
      flat
      v-scroll="onScroll"
      :color="color"
      style="transition: background-color 0.5s ease"
    >
      <v-img
        :src="require('~/assets/trello.png')"
        max-height="60"
        max-width="125"
        contain
        fluid
      ></v-img>

      <v-spacer></v-spacer>

      <NuxtLink to="./login" class="ma-2 under">Log in </NuxtLink>
      <NuxtLink to="./signup"><v-btn color="primary">Sign up</v-btn> </NuxtLink>
    </v-app-bar>
    <v-main style="padding:0px !important;">
       <!-- Customer stories -->
      <div class="customers" style="background-color: #e6fcff">
        <v-container>
          <v-carousel
            v-model="model"
            hide-delimiter-background
            light
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-sheet height="100%" tile color="#e6fcff">
                <v-row class="fill-height" align="center" justify="start">
                  <div class="col-md-3">
                    <div class="mb-5 mx-auto ml-md-0">
                      <v-img
                        :src="require('~/assets/ebay.png')"
                        max-height="86"
                        max-width="215"
                      ></v-img>
                    </div>

                    <div class="hidden-sm-and-down">
                      <h5>Industry</h5>
                      <h3>eCommerce</h3>
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="text-center text-md-left pl-md-5 pt-md-4">
                      <blockquote>
                        Everyone loves it; it has democratized our finance
                        function. In some ways Trello shattered hierarchy and
                        brought us together.
                      </blockquote>
                    </div>
                    <v-footer
                      color="#e6fcff"
                      class="d-md-flex text-md-right text-sm-center"
                    >
                      <span
                        ><h5>BHARATH SUNDAR <br />Finance, eBay</h5></span
                      >
                    </v-footer>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <!-- Second carousel -->
            <v-carousel-item>
              <v-sheet height="100%" tile color="#e6fcff">
                <v-row class="fill-height" align="center" justify="start">
                  <div class="col-md-3">
                    <div class="mb-5 mx-auto ml-md-0">
                      <v-img
                        :src="require('~/assets/seven.png')"
                        max-height="86"
                        max-width="215"
                      ></v-img>
                    </div>

                    <div class="hidden-sm-and-down">
                      <h5>Industry</h5>
                      <h3>Travel</h3>
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="text-center text-md-left pl-md-5 pt-md-4">
                      <blockquote>
                        Very simple to use, great automation and keeps me on
                        track with all I need to do. I also like that it can be
                        shared with others.
                      </blockquote>
                    </div>
                    <v-footer
                      color="#e6fcff"
                      class="d-md-flex text-md-right"
                    >
                      <span
                        ><h5>
                          KERRY PARKER-EVANS <br />IT Project Manager, Egencia
                        </h5></span
                      >
                    </v-footer>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <!-- Third carousel -->
            <v-carousel-item>
              <v-sheet height="100%" tile color="#e6fcff">
                <v-row class="fill-height" align="center" justify="start">
                  <div class="col-md-3">
                    <div class="mb-5 mx-auto ml-md-0">
                      <v-img
                        :src="require('~/assets/sport.png')"
                        max-height="86"
                        max-width="137"
                      ></v-img>
                    </div>

                    <div class="hidden-sm-and-down">
                      <h5>Industry</h5>
                      <h3>Sport</h3>
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="text-center text-md-left pl-md-5 pt-md-4">
                      <blockquote>
                        Trello makes it easy to keep everyone on the same page.
                        As changes happen, the real-time updates with email
                        notifications have been key.
                      </blockquote>
                    </div>
                    <v-footer
                      color="#e6fcff"
                      class="d-md-flex text-md-right"
                    >
                      <span
                        ><h5>
                          HAYDON DOTSON <br />Sales Manager, Detroit Red Wings
                        </h5></span
                      >
                    </v-footer>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <!-- Fourth carousel -->
            <v-carousel-item>
              <v-sheet height="100%" tile color="#e6fcff">
                <v-row class="fill-height" align="center" justify="start">
                  <div class="col-md-3">
                    <div class="mb-5 mx-auto ml-md-0">
                      <v-img
                        :src="require('~/assets/sprout.png')"
                        max-height="86"
                        max-width="137"
                      ></v-img>
                    </div>

                    <div class="hidden-sm-and-down">
                      <h5>Industry</h5>
                      <h3>Marketing</h3>
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="text-center text-md-left pl-md-5 pt-md-4">
                      <blockquote>
                        Now that we've switched to a remote environment, with
                        the use of Trello, we can now limit the number of
                        meetings we have regarding specific projects and turn to
                        Trello for updates instead.
                      </blockquote>
                    </div>
                    <v-footer
                      color="#e6fcff"
                      class="d-md-flex text-md-right"
                    >
                      <span
                        ><h5>
                          HALEY ENNES <br />HR Manager, Sprout Social
                        </h5></span
                      >
                    </v-footer>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </div>
      <!-- CARD -->
      <div class="signup py-12" justify="center" align="center">
        <v-container>
          <v-card
            :img="require('~/assets/vbanner.jpg')"
            class="inner py-5 px-3 py-lg-6 rounded-lg"
            width="1130"
            height="285"
          >
            <div class="col-md-8 offset-md-2 pt-15">
              <h3 class="m-0 mb-5">
                Sign up and get started with Trello today. A world of productive
                teamwork awaits!
              </h3>
            </div>
            <v-row class="col-md-6 offset-md-3">
              <v-text-field
                background-color="white"
                placeholder="Email"
                name="email"
                dense
                outlined
                color="white"
                class="d-none d-sm-flex"
                
              ></v-text-field>
              <v-btn color="primary" class="ml-5 py-5" width="100"
                >Sign up</v-btn
              >
            </v-row>
          </v-card>
        </v-container>
      </div>
      <!-- APPS -->
      <div class="apps">
        <v-container>
          <v-row>
            <div
              class="col-lg-8 d-lg-flex flex-row-reverse"
              justify="center"
              align="center"
            >
              <p class="mb-2 mb-lg-0">
                Trello also works great on your smaller screen.
              </p>
            </div>

            <div class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-2 pr-1">
              <v-img
                :src="require('~/assets/appstore.png')"
                max-height="55"
                max-width="175"
                fluid
              ></v-img>
            </div>

            <div class="col-6 col-md-3 col-lg-2">
              <v-img
                :src="require('~/assets/play.png')"
                max-height="55"
                max-width="175"
                fluid
              ></v-img>
            </div>
          </v-row>
        </v-container>
      </div>

      <v-footer>
        <v-container>
          <div
            justify="center"
            align="center"
            class="col-6 col-md-3 col-lg-2 mx-auto"
          >
            <v-select :items="items" outlined v-model="e1"></v-select>
          </div>

          <div justify="center" align="center">
            <ul class="list">
              <li><a href="">Templates</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Apps</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Developers</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Legal</a></li>
              <li><a href="">Cookies Settings</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </div>

          <div justify="center" align="center" class="mt-5">
            <v-img
              :src="require('~/assets/atlassian.png')"
              max-height="55"
              max-width="175"
              fluid
            ></v-img>
          </div>

          <div justify="center" align="center" class="my-5">
            <p>© Copyright 2021. All rights reserved.</p>
          </div>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "default",

  data: () => ({
    color: "#efecfe",
    model: 0,
    e1: "English (US)",
    items: ["English (US)", "Deutch", "Polskie", "Italiano"],
  }),

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      // When the window is scrolled
      this.color =
        e.target.documentElement.scrollTop === 0 ? "#efecfe" : "white";
    },
  },
};
</script>

<style>
</style>