<template>
  <div id="app">
    <Navigation/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script src="./main.js"></script>

<script>
  import Navigation from "@/components/Navigation.vue";

  export default {
    name: "App",
    components: {
      Navigation,
    },
  };
</script>