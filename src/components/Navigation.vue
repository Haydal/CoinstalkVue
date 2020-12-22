<template>
  <b-navbar toggleable="lg" type="dark" >
    <!-- Onglets Home-->
    <b-link :to="{ name: 'home'}">
      <img id="logo" src="@/assets/img/coinstalk_logo.png" alt="coinstalk">
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Onglets Charts-->
        <b-link :to="{ name: 'charts' }">Charts</b-link>
        <!-- Onglets Markets-->
        <b-link :to="{ name: 'markets' }">Markets</b-link>
        <!-- Onglets News-->
        <b-link :to="{ name: 'news' }">News</b-link>

      </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style>
  #logo{
      width:  100x;
      height: 100px;
      object-fit: contain;
  }

  li {
    list-style: none;
  }
  
  #logo {
    height: 4rem;
    width: auto;
  }
</style>
