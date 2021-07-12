<template>
   <v-app-bar app dense flat color="#026aa7">
      <!-- LEFT BUTTONS -->
      <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1"
        ><v-icon color="white" medium>mdi-apps</v-icon></v-btn
      >
      <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1"
        ><v-icon color="white" medium>mdi-home</v-icon></v-btn
      >
      <v-btn
        color="hsla(0,0%,100%,.2)"
        x-small
        class="py-4 px-1 white--text mr-1"
        ><v-icon color="white" medium>mdi-checkbox-blank-outline</v-icon
        >Boards</v-btn
      >

      <v-spacer></v-spacer>
      <!-- CENTERED LOGO -->
      <v-img
        :src="require('~/assets/boardimg.gif')"
        max-height="60"
        max-width="140"
        contain
        fluid
        justify="center"
        align="center"
        class="d-flex justify-content-between"
      ></v-img>
      <v-spacer></v-spacer>
      <!-- RIGHT BUTTONS -->
      <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1"
        ><v-icon color="white" medium>mdi-plus</v-icon></v-btn
      >
      <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1"
        ><v-icon color="white" medium>mdi-information-outline</v-icon></v-btn
      >
      <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1"
        ><v-icon color="white" medium>mdi-bell-outline</v-icon></v-btn
      >
      <!-- USER MENU -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="hsla(0,0%,100%,.2)"
            fab
            x-small
            class="py-4 px-1"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon medium color="white"> mdi-account-circle </v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="white--text headline">NA</span>
              </v-avatar>
              <p class="caption mt-1">
                {{ $nuxt.$fire.auth.currentUser.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout"> Log out </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            menu: false,
        }
    },
    methods: {
        logout() {
      this.$fire.auth
        .signOut()
        .then(() => {
          //Loged out , automatically redirects to login page from auth.js
        })
        .catch((error) => {
          console.error("Sign Out Error", error);
        });
    },
    }
}
</script>

<style>

</style>