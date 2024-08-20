<template>
  <ContentBase>
    <div class="mb-3">
      <label for="edit_text" class="form-label">请编辑您的帖子</label>
      <textarea
        v-model="content"
        class="form-control"
        id="edit_text"
        rows="3"
      ></textarea>
      <button
        @click="post_a_post"
        type="button"
        class="btn btn-primary distance"
      >
        提交
      </button>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase";
import { ref } from "vue";
import $ from "jquery";
import { useStore } from "vuex";

export default {
  name: "UserProfileWrite",
  components: {
    ContentBase,
  },
  setup(props, context) {
    const store = useStore();
    let content = ref("");

    const post_a_post = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "POST",
        data: {
          content: content.value,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit("post_a_post", content.value);
            content.value = " ";
          }
        },
      });
    };
    return {
      post_a_post,
      content,
    };
  },
};
</script>

<style scoped>
button.distance {
  margin-top: 20px;
}
</style>
