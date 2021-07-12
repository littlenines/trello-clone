<template>
  <!-- FEAUTURES -->
      <div class="product pt-15">
        <v-container>
          <v-row class="py-4">
            <div class="col-lg-5">
              <h2>Features to help your team succeed</h2>
              <p class="text-left">
                Powering a productive team means using a powerful tool (and
                plenty of snacks). From meetings and projects to events and goal
                setting, Trello’s intuitive features give any team the ability
                to quickly set up and customize workflows for just about
                anything.
              </p>
            </div>
          </v-row>

          <v-row class="py-10">
            <div class="col-md-5">
              <v-img
                :src="require('~/assets/one.png')"
                max-height="343"
                max-width="452"
              ></v-img>
            </div>

            <div class="col-md-7">
              <h5>CHOOSE A VIEW</h5>
              <h2>The board is just the beginning</h2>
              <p class="grey--text mb-5">
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
              <h3><v-icon medium>mdi-plus</v-icon>Learn more</h3>
            </div>
          </v-row>

          <v-row class="py-10">
            <div class="col-md-7 orderOne">
              <h5>DIVE INTO THE DETAILS</h5>
              <h2>Cards contain everything you need</h2>
              <p class="grey--text mb-5">
                Trello cards are your portal to more organized work—where every
                single part of your task can be managed, tracked, and shared
                with teammates. Open any card to uncover an ecosystem of
                checklists, due dates, attachments, conversations, and more.
              </p>
              <h3><v-icon medium>mdi-plus</v-icon>Learn more</h3>
            </div>

            <div class="col-md-5 orderTwo">
              <v-img
                :src="require('~/assets/two.png')"
                max-height="351"
                max-width="452"
              ></v-img>
            </div>
          </v-row>

          <v-row class="py-10">
            <div class="col-md-5">
              <v-img
                :src="require('~/assets/three.png')"
                max-height="351"
                max-width="452"
              ></v-img>
            </div>
            <div class="col-md-7">
              <h5>MEET YOUR NEW BUTLER</h5>
              <h2>No-code automation</h2>
              <p class="grey--text mb-5">
                Let the robots do the work—so your team can focus on work that
                matters. With Trello’s built-in automation, Butler, reduce the
                number of tedious tasks (and clicks) on your project board by
                harnessing the power of automation across your entire team.
              </p>
              <h3><v-icon medium>mdi-plus</v-icon>Learn more</h3>
            </div>
          </v-row>

          <v-row class="py-10">
            <div class="col-md-7 mt-10 orderOne">
              <h5>POWER-UPS</h5>
              <h2>Integrate top work tools</h2>
              <p class="grey--text mb-5">
                Easily connect the apps your team already uses into your Trello
                workflow, or add a Power-Up that helps fine-tune one specific
                need. With hundreds of Power-Ups available, your team’s workflow
                wishes are covered.
              </p>
              <h3><v-icon medium>mdi-plus</v-icon>Learn more</h3>
            </div>

            <div class="col-md-5 orderTwo">
              <v-img
                :src="require('~/assets/four.png')"
                max-height="384"
                max-width="426"
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