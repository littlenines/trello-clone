<template>
  <v-app
    :style="
      board.image.downloadURL != ''
        ? `background:url(${board.image.downloadURL});background-size: cover; background-attachment: fixed; background-repeat: no-repeat;`
        : board.color
        ? `background-color:${board.color}`
        : ''
    "
  >
    <v-app-bar dense flat color="rgba(0,0,0,.32)">
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
      <NuxtLink to="/board">
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
      </NuxtLink>
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
    <!-- UPPER NAVIGATION -->
    <div color="transparent" class="d-inline mx-4 mt-2 ">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text">
            <v-icon left class="mx-1"> mdi-pencil </v-icon>Board</v-btn
          >
          <!-- BOARD NAME BUTTON -->
          <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="rgba(0,0,0,.19)"
                x-small
                class="py-4 px-1 mr-1 white--text"
                v-bind="attrs"
                v-on="on"
              >
                <h2>{{ board.title }}</h2>
              </v-btn>
            </template>

            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto px-3">
                  <v-row no-gutters align="center" justify="center">
                    <h3>{{ board.title }}</h3>
                    <v-icon medium @click="deleteBoard()">mdi-delete</v-icon>
                  </v-row>
                  <v-row no-gutters align="center" justify="center">
                      <small class="ml-5">created {{ board.dateCreated | formatDate }}</small>
                    </v-row>
                  <v-divider class="my-3"></v-divider>
                  <v-list dense>
                    <v-list-item-group color="primary">
                      <v-list-item  v-for="(item, i) in items" :key="i">
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
      
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
          <!-- END BOARD NAME -->

          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text"
            ><v-icon medium>mdi-star-outline</v-icon></v-btn
          >

          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text"
            >My Board <v-chip x-small color="hsla(0,0%,100%,.2)" class="px-1 py-2 ml-1">Free</v-chip></v-btn
          >

          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text"
            ><v-icon small>mdi-account-multiple</v-icon>Workspace visible</v-btn
          >
          <!-- ACCOUNT ICON -->
          <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-badge
                
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-btn
                  fab
                  color="hsla(0,0%,100%,.2)"
                  x-small
                  class="py-4 px-1 mr-1"
                  v-bind="attrs"
                  v-on="on"
                  ><v-icon medium color="white">
                    mdi-account-circle
                  </v-icon></v-btn
                >
              </v-badge>
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
                  <v-icon medium @click="deleteBoard()">mdi-delete</v-icon>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
          <!-- END ACCOUNT ICON -->

          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text"
            >Invite</v-btn
          >
        </v-col>

        <v-col cols="6" md="4" justify="end" align="end">
          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 mr-1 white--text"
            ><v-icon small>mdi-room-service</v-icon>Buttler</v-btn
          >
          <v-btn color="hsla(0,0%,100%,.2)" x-small class="py-4 px-1 white--text"
            ><v-icon small>mdi-dots-horizontal</v-icon>Show menu</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <!-- MAIN PAGE -->
    <div class="d-flex flex-column board">
      <div class="d-flex flex-row pr-6 pt-3 ml-5">
        <div
          v-for="list in board.lists"
          @drop="drop($event, list.id)"
          @dragover="allowDrop($event)"
          class="d-flex flex-column pt-3 mr-6 list"
          v-bind:key="list.id"
        >
          <div class="d-flex flex-row justify-space-between">
            <h4>{{ list.title }}</h4>
            <v-icon small @click="deleteList(list.id)"
              >mdi-delete-outline</v-icon
            >
          </div>

          <!--display cards-->
          <v-card
            v-for="card in list.cards"
            :draggable="true"
            @dragover.prevent
            @dragstart="drag($event, card)"
            class="mt-2"
            @click="editCard(card)"
            v-bind:key="card.id"
          >
            <v-card-text> {{ card.title }} </v-card-text>
          </v-card>

          <v-btn
            depressed
            @click="
              dialogCard = true;
              listId = list.id;
            "
            class="mt-auto"
            >Add card</v-btn
          >
        </div>
        <v-dialog v-model="dialogCard" persistent max-width="600px">
          <v-card elevation="0">
            <v-card-title>
              <span class="headline">Card name</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Stuff to do"
                      v-model="card.title"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogCard = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="createCard()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="d-flex flex-row">
          <v-btn depressed dense @click="dialog = true" class="create-list"
            ><v-icon small>mdi-plus</v-icon> Add a list</v-btn
          >
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card elevation="0">
              <v-card-title>
                <span class="headline">List name</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Stuff to do"
                        v-model="list.title"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="createList()">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-dialog v-model="dialogEditCard" persistent max-width="600px">
          <v-card elevation="0">
            <v-card-title>
              <span class="headline">{{ currentCard.title }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Edit title"
                      v-model="currentCard.title"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="deleteCard()">
                Delete
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialogEditCard = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="updateCard()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-app>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  layout: 'empty',
  mounted: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "hidden";
  },
  destroyed: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
  },
  data() {
    return {
      menu: false,
      items: [
        { text: 'Edit workspace…'},
        { text: 'View board page'},
      ],
      listId: "",
      list: {
        title: "",
      },
      card: {
        title: "",
      },
      currentCard: {},
      cardDraggedId: "",
      cardDraggedListId: "",
      dialog: false,
      dialogCard: false,
      dialogEditCard: false,
      drawer: false,
    };
  },
  async asyncData({ params }) {
    //lets get our board data before page load, and then after that await changes
    let boardRef = $nuxt.$fire.firestore
      .collection("users")
      .doc($nuxt.$fire.auth.currentUser.uid)
      .collection("boards")
      .doc(params.id);
    let boardData = {};
    await boardRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          boardData = doc.data();
          boardData.id = params.id;
        }
      })
      .catch(function (error) {});
    return { board: boardData };
  },
  created() {
    let that = this;
    let tempId = this.board.id;
    let boardRef = $nuxt.$fire.firestore
      .collection("users")
      .doc($nuxt.$fire.auth.currentUser.uid)
      .collection("boards")
      .doc(tempId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          that.board = doc.data();
          that.board.id = tempId;
        }
      });
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
    async createList() {
      let that = this;
      that.dialog = false;
      if (that.list.title != "") {
        //add to firebase
        //Let's give our list a created date.
        that.list.id = uuidv4();
        that.list.cards = [];
        that.list.dateCreated = Date.now();
        if (that.board.lists) {
          that.board.lists.push(that.list);
        } else {
          that.board.lists = [];
          that.board.lists.push(that.list);
        }
        await that.updateBoard();
        that.list = {};
      }
    },
    async updateCardList(newlistId) {
      let that = this;
      let tempListIndex = -1;
      let tempCardIndex = -1;
      let newListIndex = -1;
      let tempListCount = 0;
      let tempCardCount = 0;
      //get the index in current cards current list
      for (const list of that.board.lists) {
        if (list.id === newlistId) {
          newListIndex = tempListCount;
        }
        if (that.currentCard.listId === list.id) {
          //correct list, now find card
          tempListIndex = tempListCount;
          for (const card of list.cards) {
            if (card.id === that.currentCard.id) {
              tempCardIndex = tempCardCount;
            }
            tempCardCount++;
          }
        }
        tempListCount++;
      }
      //remove currentCard from current list
      that.board.lists[tempListIndex].cards.splice(tempCardIndex, 1);
      //add currentCard to its new list
      that.currentCard.listId = newlistId;
      that.board.lists[newListIndex].cards.push(that.currentCard);
      await that.updateBoard();
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev, card) {
      this.currentCard = card;
    },
    drop(ev, listId) {
      ev.preventDefault();
      this.updateCardList(listId);
    },
    async deleteList(listId) {
      let that = this;
      let index = -1;
      let count = 0;
      for (const list of that.board.lists) {
        if (list.id == listId) {
          index = count;
        }
        count++;
      }
      if (index > -1) {
        that.board.lists.splice(index, 1);
        await that.updateBoard();
      }
    },
    async createCard() {
      let that = this;
      that.dialogCard = false;
      //show modal to capture card name
      //add card
      if (that.card.title != "") {
        //add to firebase
        //Let's give our card a created date.
        that.card.id = uuidv4();
        that.card.dateCreated = Date.now();
        that.card.listId = that.listId;
        if (that.board.lists) {
          let index = -1;
          let count = 0;
          for (const list of that.board.lists) {
            if (list.id === that.listId) {
              index = count;
            }
            count++;
          }
          if (index != -1) {
            //we found the list, now push our card
            if (that.board.lists[index].cards) {
              that.board.lists[index].cards.push(that.card);
            } else {
              that.board.lists[index].cards = [];
              that.board.lists[index].cards.push(that.card);
            }
          }
        }
        await that.updateBoard();
        that.card = {};
        that.listId = "";
      }
    },
    editCard(card) {
      this.dialogEditCard = true;
      this.currentCard = card;
    },
    async updateCard() {
      let that = this;
      that.dialogEditCard = false;
      for (const list of that.board.lists) {
        if (that.currentCard.listId === list.id) {
          //correct list, now find card
          for (const card of list.cards) {
            if (card.id === that.currentCard.id) {
              card = that.currentCard;
            }
          }
        }
      }
      await that.updateBoard();
    },
    async deleteCard() {
      let that = this;
      that.dialogEditCard = false;
      let i = 0;
      let j = 0;
      let index = {
        list: -1,
        card: -1,
      };
      for (const list of that.board.lists) {
        if (that.currentCard.listId === list.id) {
          //correct list, now find card
          for (const card of list.cards) {
            if (card.id === that.currentCard.id) {
              index.list = i;
              index.card = j;
            }
            j++;
          }
        }
        i++;
      }
      if (index.list > -1) {
        that.board.lists[index.list].cards.splice(index.card, 1);
        await that.updateBoard();
      }
    },
    async deleteBoard() {
      let that = this;
      try {
        await that.$fire.firestore
          .collection("users")
          .doc(that.$fire.auth.currentUser.uid)
          .collection("boards")
          .doc(that.board.id)
          .delete()
          .then(() => {
            $nuxt.$router.push("/");
          })
          .catch(() => {});
      } catch (error) {
        $nuxt.$router.push("/");
      }
    },
    async updateBoard() {
      let that = this;
      await that.$fire.firestore
        .collection("users")
        .doc(that.$fire.auth.currentUser.uid)
        .collection("boards")
        .doc(that.board.id)
        .update(that.board, { merge: true });
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  height: 100vh;
  overflow-x: auto;
  .list {
    min-width: 250px;
    background-color: rgb(228 228 228 / 35%);
    padding: 8px;
    border-radius: 12px;
    min-height: 70vh;
  }
  .create-list {
    background-color: rgb(228 228 228 / 35%);
  }
  a {
    text-decoration: none;
  }
  .menu-items a {
    color: #2e2e2e;
    padding: 10px 0px 10px 3px;
    font-size: 24px;
  }
  .trello-topbar {
    background-color: rgb(255, 255, 255, 0);
    padding: 0px !important;
  }
}
</style>