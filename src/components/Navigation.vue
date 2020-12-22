<template>
  <b-navbar toggleable="lg" type="dark" variant="black">
    <!-- Onglets Home-->
    <b-link :to="{ name: 'home'}">
      <img id="logo" src="@/assets/img/coinstalk.png" alt="coinstalk">
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Onglets Charts-->
        <b-nav-item :to="{ name: 'charts' }">Charts</b-nav-item>
        <!-- Onglets Markets-->
        <b-nav-item :to="{ name: 'markets' }">Markets</b-nav-item>
        <!-- Onglets News-->
        <b-nav-item :to="{ name: 'apinews' }">News</b-nav-item>
        <!--REDIRECT SERVEUR/LOGiN --> 
        <a href="http://localhost:5001/login" style="text-decoration:none;" class="ml-3">Login</a>
        <!--REDIRECT SERVEUR/LOGiN --> 
        <a href="http://localhost:5001/Register" style="text-decoration:none;" class="ml-4">Register</a>

        
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
    background-color: goldenrod;
    border-radius: 10%;
  }
  

</style>
