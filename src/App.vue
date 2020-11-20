<template>
  <div id="app">
    <Navigation/>
    <Header/>
    <Home/>
  </div>
</template>

<script src="@/main.js"></script>

<script>
import Navigation from "@/components/Navigation.vue";
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Home
  },
};
</script>