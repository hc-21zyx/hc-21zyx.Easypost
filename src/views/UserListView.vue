<template>
  <ContentBase>
    <div
      class="card"
      v-for="user in users"
      :key="user.id"
      @click="open_user_profile(user.id)"
    >
      <div class="card-body">
        <div class="row">
          <div class="col-1 img-field">
            <img class="img-fluid" :src="user.photo" alt="" />
          </div>
          <div class="col-11">
            <div class="username">{{ user.username }}</div>
            <div class="follower-count">{{ user.followerCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase";
import $ from "jquery";
import { ref } from "vue";
import router from "@/router/index";
import { useStore } from "vuex";

export default {
  name: "UserList",
  components: {
    ContentBase,
  },
  setup() {
    const store = useStore();
    let users = ref([""]);
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
      type: "GET",
      success(resp) {
        console.log(resp);
        users.value = resp;
        console.log(users);
      },
    });

    const open_user_profile = (userId) => {
      if (store.state.user.is_login) {
        router.push({
          name: "userprofile",
          params: {
            userId,
          },
        });
      } else {
        router.push({
          name: "login",
        });
      }
    };
    return {
      users,
      open_user_profile,
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

div.username {
  font-weight: bold;
  margin-bottom: 20x;
}

div.follower-count {
  font-size: 20px;
  color: lightseagreen;
}

div.card {
  cursor: pointer;
  margin-bottom: 20px;
}

div.card:hover {
  box-shadow: 2px 2px 10px lightblue;
  transition: 200ms;
}

.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
