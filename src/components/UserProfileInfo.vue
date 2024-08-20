<template>
  <ContentBase>
    <div class="row">
      <div class="col-3 img-field">
        <img class="img-fluid" :src="user.photo" alt="" />
      </div>
      <div class="col-9">
        <div class="username">{{ user.username }}</div>
        <div class="fans">{{ user.followerCount }}</div>
        <button
          v-if="!user.is_followed"
          @click="follow"
          type="button"
          class="btn btn-primary"
        >
          + 关注
        </button>
        <button
          v-if="user.is_followed"
          @click="unfollow"
          type="button"
          class="btn btn-secondary"
        >
          - 取消关注
        </button>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "./ContentBase.vue";
import $ from "jquery";
import { useStore } from "vuex";

export default {
  name: "UserProfileInfo",
  components: {
    ContentBase,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const store = useStore();
    const follow = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result == "success") {
            context.emit("follow");
          }
        },
      });
    };
    const unfollow = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result == "success") {
            context.emit("unfollow");
          }
        },
      });
    };
    return {
      ContentBase,
      follow,
      unfollow,
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}
button {
  padding: 2px 4px;
  font-size: 12px;
}
.username {
  font-weight: bold;
}
.fans {
  font-size: 12px;
  color: gray;
}
.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
