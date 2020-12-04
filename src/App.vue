<template>
  <div class="container col" id="app">
    <Navigation/>
    <b-container class="container col">
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