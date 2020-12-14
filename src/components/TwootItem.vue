<template>
  <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
    <div class="user-profile__twoot">
      <div class="user-profile__user">@{{ username }}</div>

      <div class="user-profile__content">{{ twoot.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favouriteTwoot(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    transform: scale(1.05, 1.05);
  }
}

.twoot-item__user {
  font-weight: bold;
}
</style>
