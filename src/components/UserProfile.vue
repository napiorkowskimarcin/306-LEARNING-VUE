<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@ {{ user.username }}</h1>

      <div class="user-profile__admin" v-if="user.isAdmin">Admin</div>

      <div class="user-profile__followecount">
        <strong>Followers:</strong> {{ followers }}
      </div>
      <form
        action=""
        class="user-profile__create"
        @submit.prevent="createNewTwoot"
        :class="{ '--exceeded': newTwootCharacterCount > 180 }"
      >
        <label for="newTwoot"
          ><strong>new twoot!</strong> ({{ newTwootCharacterCount }}/180)
        </label>
        <textarea name="newTwoot" rows="4" v-model="newTwootContent"></textarea>
        <div class="user-profile__create-type">
          <label for="newTwootType"><strong>Type</strong></label>
          <select name="newTwootType" id="" v-model="selectedTwootType">
            <option
              :value="option.value"
              v-for="(option, index) in twootTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button>Twoot!</button>
      </form>
    </div>
    <!--  -->
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>

  <!-- <button @click="followUser">Followers +1</button>
    <button @click="unfollowUser">Followers -1</button> -->
</template>

<script>
import TwootItem from "./TwootItem.vue";
import { reactive } from "vue";

export default {
  name: "UserProfile",
  components: { TwootItem },

  setup() {
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: "instant",
      followers: 0,
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "InstantTwoot" },
      ],
    });
  },

  data() {
    return {
      user: {
        id: 1,
        username: "_mn",
        firstName: "marcin",
        lastName: "nazwisko",
        email: "asas@sas.pl",
        isAdmin: true,
        twoots: [
          { id: 1, content: "Text1 AAABBBCCCDDD" },
          { id: 2, content: "Text2 AAABBBCCCDDD" },
          { id: 3, content: "Text3 AAABBBCCCDDD" },
          { id: 4, content: "Text4 AAABBBCCCDDD" },
          { id: 5, content: "Text5 AAABBBCCCDDD" },
          { id: 6, content: "Text6 AAABBBCCCDDD" },
          { id: 7, content: "Text7 AAABBBCCCDDD" },
        ],
      },
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`);
      }

      if (oldFollowerCount > newFollowerCount) {
        console.log(`${this.user.username} has lost a follower!`);
      }
    },
  },

  computed: {
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    },
  },
  methods: {
    // followUser() {
    //   this.followers++;
    // },
    // unfollowUser() {
    //   this.followers--;
    // },
    toggleFavourite(id) {
      console.log(`Favourited one #${id}`);
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== "draft") {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        });
        this.newTwootContent = "";
      }
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    .user-profile__create {
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.d--exceeded {
        color: red;
      }
    }

    .user-profile__admin {
      background-color: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
