<template>
  <ContentBase>
    <div class="card">
      <div class="card-body">
        <h1 style="color: red; text-align: center">
          超级简易聊天交流平台相关介绍
        </h1>
        <div class="card dist">
          <div class="card-body">
            这是一款由<strong>zyx</strong>不完全独立开发出来的超级简易版的交流平台,部分功能可能不适应,
            会尽可能的进行优化
            <hr />
            <h3 style="color: cornflowerblue; text-align: center">
              《该站功能说明》
            </h3>
            <hr />
            <strong
              >暂时烂尾的一个工程(待到本人的技术栈扩充之后再来完善这个工程)</strong
            ><br />
            功能:1.可以点开那个用户列表查看用户的帖子信息,2.可然后可以查看自己的帖子信息,也可以通过一个框框来安发帖子
            同时也可以进行删除
            <hr />

            <h3 style="color: cornflowerblue; text-align: center">
              《该站技术说明》
            </h3>
            <hr />
            前端:Vue3<br />
            一开始写,仅仅是是为了入门Vue3
            <hr />
            网站的性质主要是学习Vue3时所创作,切勿恶搞
            <hr />
            欢迎关顾网站的dalao.
            <hr />
            由于本人的技术原因,这个网站暂时只能烂尾了 ........
          </div>
        </div>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase";

export default {
  name: "HomeView",
  components: {
    ContentBase,
  },
};
</script>

<style scoped>
div.dist {
  font-size: 20px;
  margin-top: 20px;
  color: cornflowerblue;
}
</style>
