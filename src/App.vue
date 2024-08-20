<template>
  <NavBar />
  <router-view :key="$router.fullPath" />
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background: beige;
  background-size: cover;
}
</style>
