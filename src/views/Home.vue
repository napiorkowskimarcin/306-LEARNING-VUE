<template>
  <div class="home">
    <p>Home</p>
    <div class="users-list">
      Go to:
      <router-link
        v-for="user in users"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
        :key="user.id"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { users } from "../assets/users";
export default {
  name: "Home",

  setup() {
    return { users };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
  .users-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
