<template>
<div class="content">
  <b-navbar toggleable="lg" type="dark">
    <!-- Onglets Home-->
    <b-link :to="{ name: 'home' }">
      <img id="logo" src="@/assets/img/coinstalk_logo.png" alt="coinstalk" />
    </b-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" class="text-center" is-nav>
      <!-- Onglets Charts-->
      <b-nav-item><b-link :to="{ name: 'charts' }"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-graph-up d-lg-block" style="margin:auto;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
             </svg> Charts</b-link></b-nav-item>
      <!-- Onglets Markets-->
     <b-nav-item><b-link :to="{ name: 'markets' }"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-shop d-lg-block" style="margin:auto;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
             </svg> Markets</b-link></b-nav-item>
      <!-- Onglets News-->
      <b-nav-item><b-link :to="{ name: 'news' }"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-newspaper d-lg-block" style="margin:auto;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
               <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
             </svg> News</b-link></b-nav-item>
      <div class="container col text-center">
        <div class="col-lg-10"></div>
         <b-button-toggle class="col-lg-1 border" v-b-modal.modal-1>Login</b-button-toggle>
          <b-modal id="modal-1" title="Login">
            <h3>Login</h3>
           E-mail:
           <br>
           Password:
           <br>
           ---------------
           <h3>No account ? Register!</h3>
           E-mail:
           <br>
           Password:
          </b-modal>
      </div>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>

#logo {
  width: 100x;
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
