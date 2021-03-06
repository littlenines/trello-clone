<template>
  <v-app>
 
    <!-- ADD BOARD -->
    <v-main>
      <v-row justify="end" class="mr-4">
        <v-dialog v-model="dialog" max-width="355px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="addBoard"
            >
              Add board
            </v-btn>
          </template>
          <v-card>
            <v-container class="d-block">
              <v-row no-gutters align="center" justify="space-between">
                <v-row no-gutters>
                  <h3>Add Board</h3>
                </v-row>
                <v-icon @click="dialog = false">mdi-close</v-icon>
              </v-row>

              <v-form ref="form" v-model="valid" class="d-flex flex-column">
                <v-text-field
                  label="Add board title"
                  :rules="[(v) => !!v || 'Board title is required']"
                  required
                  v-model="board.title"
                ></v-text-field>

                <v-btn
                  v-if="enableColor === false"
                  @click="enableColor = true"
                  color="primary"
                >
                  Choose board color
                </v-btn>
                <br />
                <v-color-picker
                  v-if="enableColor === true"
                  v-model="board.color"
                  dot-size="25"
                  hide-inputs
                  swatches-max-height="100"
                ></v-color-picker>
                <div
                  class="d-flex flex-column align-center justify-center flex-grow-1 upload-block"
                  @click="chooseImage"
                  :style="`background-image: url('${
                    board.image.downloadURL ? board.image.downloadURL : ''
                  }');height:150px;background-size: cover;background-position: center;`"
                >
                  <template
                    v-if="!fileToUpload.progress || fileToUpload.progress == 0"
                  >
                    <v-icon>mdi-camera</v-icon>
                    <p>Add a board background</p>
                    <input
                      type="file"
                      accept="jpg, jpeg, png"
                      ref="boardBackground"
                      multiple
                      color="#f66f26"
                      buffer-value="0"
                      @click="onFileClicked($event)"
                      @change="onFileSelected($event)"
                      style="display: none;"
                    />
                  </template>
                  <template
                    v-else-if="
                      fileToUpload.progress > 0 && fileToUpload.progress < 100
                    "
                  >
                    <div class="text-center">
                      <v-progress-circular
                        :size="50"
                        color="green"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </div>
                <v-btn :disabled="!valid" color="primary" @click="createBoard"
                  >Submit</v-btn
                >
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>

      <div class="d-flex flex-row align-center justify-space-between">
        <h1>My Boards</h1>
      </div>
      <div class="d-flex flex-wrap align-center justify-start">
        <p v-if="boards.length === 0">You have no boards yet.</p>
        <v-card
          :style="
            board.image.downloadURL != ''
              ? `background:url(${board.image.downloadURL});background-size: cover; `
              : board.color
              ? `background-color:${board.color}`
              : ''
          "
          @click="$router.push('/id/' + board.id)"
          class="trello-board-tile"
          v-for="board in boards"
          v-bind:key="board.id"
        >
          <v-card-title
            :style="board.image.downloadURL != '' ? 'color:#fff' : ''"
          >
            {{ board.title }}
          </v-card-title>
          <v-card-subtitle
            :style="board.image.downloadURL != '' ? 'color:#fff' : ''"
          >
            {{ board.dateCreated | formatDate }}
          </v-card-subtitle>
        </v-card>
      </div>
      <v-snackbar
        :timeout="3000"
        v-model="snackbar"
        absolute
        bottom
        color="primary"
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>


<script>
import { v4 as uuidv4 } from "uuid";
export default {
  layout: 'board',
   mounted: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = 'hidden'
  },
  destroyed: function() {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = null
  },
  async asyncData() {
    //lets get our board data before page load, and then after that await changes
    let boardsRef = $nuxt.$fire.firestore
      .collection("users")
      .doc($nuxt.$fire.auth.currentUser.uid)
      .collection("boards");
    let boardData = [];
    await boardsRef
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.docs.length > 0) {
          try {
            for (const doc of querySnapshot.docs) {
              let data = doc.data();
              data.id = doc.id;
              boardData.push(data);
            }
          } catch (err) {}
        }
      })
      .catch(function (error) {});
    return { boards: boardData };
  },
  data() {
    return {
      enableColor: false,
      dialog: false,
      valid: false,
      board: {
        title: "",
        color: "",
        image: {
          name: "",
          originalName: "",
          downloadURL: "",
          uuid: "",
        },
      },
      snackbar: false,
      snackbarText: "No error message",
      currentImageId: "",
      fileToUpload: {},
    };
  },
  created() {
    //lets watch our boards just to give it that realtime feel when we add or remove boards.
    let that = this;
    $nuxt.$fire.firestore
      .collection(`users/${$nuxt.$fire.auth.currentUser.uid}/boards/`)
      .onSnapshot(function (querySnapshot) {
        if (querySnapshot.docs.length > 0) {
          that.boards = [];
          try {
            for (const doc of querySnapshot.docs) {
              let data = doc.data();
              data.id = doc.id;
              that.boards.push(data);
            }
          } catch (err) {}
        }
      });
  },
  methods: {
    addBoard() {
      //lets create a temp id we can use to save our doc and our storage files
      this.currentImageId = uuidv4();
      this.dialog = true;
    },
    createBoard() {
      let that = this;
      if (this.$refs.form.validate()) {
        //Let's give our board a created date.
        this.board.dateCreated = Date.now();
        this.$fire.firestore
          .collection("users")
          .doc(this.$fire.auth.currentUser.uid)
          .collection("boards")
          .doc(this.currentImageId)
          .set(this.board)
          .then(function (docRef) {
            that.dialog = false;
            that.$refs.form.reset();
            that.snackbarText = "Successfully created your board";
            that.snackbar = true;
          })
          .catch(function (error) {});
      }
    },

    chooseImage() {
      this.$refs["boardBackground"].click();
    },
    onFileClicked($event) {
      $event.target.value = "";
    },
    onFileSelected(event) {
      try {
        /// Process Selected Files
        let file = event.target.files[0];
        this.fileToUpload = {
          file,
          originalName: file.name,
          loading: false,
          progress: 0,
          success: false,
          error: false,
          previewPath: "",
          uuid: uuidv4(),
        };
        this.uploadFiles();
      } catch (error) {}
    },
    uploadFiles() {
      const itemFilename =
        this.fileToUpload.uuid + "-" + this.fileToUpload.file.name;
      const itemName =
        "images" +
        "/" +
        this.$fire.auth.currentUser.uid +
        "/" +
        "boards" +
        "/" +
        this.currentImageId +
        "/" +
        itemFilename;
      const itemRef = this.$fire.storage.ref().child(itemName);
      const itemMeta = {
        customMetadata: {
          owner: this.$fire.auth.currentUser.uid,
        },
      };
      // Action upload
      const task = itemRef.put(this.fileToUpload.file, itemMeta);
      // Watch for upload status Changes
      return task.on(
        "state_changed",
        // Handle progress
        (progress) => {
          // Set upload progress on item
          this.fileToUpload.progress =
            (progress.bytesTransferred / progress.totalBytes) * 100;
        },
        // Handle unsuccessful uploads
        (error) => {
          this.fileToUpload.failed = true;
          this.fileToUpload.error = error;
          return false;
        },
        // Handle successful uploads on complete
        async () => {
          const url = await task.snapshot.ref
            .getDownloadURL()
            .catch((e) => false);
          // Store form media
          this.board.image = {
            name: itemFilename,
            originalName: this.fileToUpload.file.name,
            downloadURL: url,
            uuid: this.fileToUpload.uuid,
          };
        }
      );
    },
  },
};
</script>

<style lang="scss">
.v-dialog {
  border-radius: 15px;
  background-color: white;
  padding: 15px;
}
.upload-block {
  border: 2px dashed #adadad;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>