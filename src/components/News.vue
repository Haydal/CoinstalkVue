<template>
  <div style="background-color: black" id='all'>
    <div class="container col-md-8" id="maincontainer">
      <div class="marquee-rtl">
        <!-- le contenu défilant -->
        <div>
          <h1 style="font-weight: bolder; color: #daa520">
            CRYPTOCURRENCY NEWS
            <h5 style="color: #daa520">By Coinstalk</h5>
          </h1>
        </div>
      </div>
      <!--Fin div marquee-->

      <p class="text-light">
        This page is dedicated to cryptocurrency worldwide selected informations
        of the day, hope it will help you to make the best out of your money we
        work on it as good as we can !
      </p>
      <div class="row" id="raw1">
        <div
          class="container col-md-4 border border-light"
          id="containerinrow1"
        >
          <h2 class="text-light">PREMIER ARTICLE</h2>
          <p class="text-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facere quaerat rerum enim unde perspiciatis accusamus, repellendus
            perferendis provident quos neque, fugit praesentium in aut vel
            blanditiis totam labore! Ducimus.
          </p>
        </div>
        <!--Fin de div container1inrow1-->

        <div
          class="container col-md-4 border border-light"
          id="containerinrow1"
        >
          <h2 class="text-light">DEUXIEME ARTICLE</h2>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
            hic odio nostrum mollitia, tenetur iure accusamus sint similique
            pariatur voluptatibus incidunt laboriosam laborum illo et. Esse
            cumque animi id!
          </p>
        </div>
        <!--Fin de div container2inrow1-->

        <div
          class="container col-md-4 border border-light"
          id="containerinrow1"
        >
          <h2 class="text-light">TROISIEME ARTCILE</h2>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
            hic odio nostrum mollitia, tenetur iure accusamus sint similique
            pariatur voluptatibus incidunt laboriosam laborum illo et. Esse
            cumque animi id!
          </p>
        </div>
        <!--Fin de div container3inrow1-->

        <div
          class="container col-md-12 border border-light mt-5"
          id="containerinrow1"
        >
          <h2 class="text-light">QUATRIEME ARTICLE</h2>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias
            hic odio nostrum mollitia, tenetur iure accusamus sint similique
            pariatur voluptatibus incidunt laboriosam laborum illo et. Esse
            cumque animi id!
          </p>
        </div>
        <!--Fin de div container4inrow1-->
      </div>
      <!--Fin de div raw1-->
    </div>
    <!--Fin container main-->

    <div class="container mt-5" id="containersecond">
      <div class="container col-md-8" style="float: left" id="containeroutraw2">
        <h2 class="text-light">
          CoinStalk advises you to get started in crypto-tading :)
        </h2>
        <p class="text-light">
          Find here our selection of best-websites to earn crypto and precious
          information about trading them...
        </p>
      </div>
      <!--Fin de div container out raw2-->

      <div class="raw" id="raw2">
        <div
          class="container col-md-3 mt-3"
          style="float: left"
          id="containerinraw2"
        >
          <h3 class="text-light">
            Coinbase.com is still one of the best and easier way to get your
            first bitcoins in order to purchase and trade all the others cryptos
          </h3>
          <a href="https://www.coinbase.com" target="_blank"
            ><img src="../assets/img/coinbase.jpeg" alt="coinbaseimg" id="coinbaseimg"
          /></a>
        </div>
        <!--Fin de div container in raw2-->
        <div class="container col-md-3 mt-3" id="containerinraw2">
          <h3 class="text-light">
            Coinbase.com is still one of the best and easier way to get your
            first bitcoins in order to purchase and trade all the others cryptos
          </h3>
     
        </div>
        <!--Fin de div container in raw2-->
      </div>
      <!--fin de div raw2-->
    </div>
    <!--fin de div containersecond-->
  </div>
  

</template>

<script>
export default {
  name: "News",
};
</script>

<style>

h1, p, h3 {
  background-color : initial; 
}

#maincontainer{
    
    background-image: url('../assets/img/backg.png');
    background-repeat: no-repeat;
}

.marquee-rtl {
    max-width: 30em;                      /* largeur de la fenêtre */
    margin: 1em auto 2em;
  
    overflow: hidden;                     /* masque tout ce qui dépasse */
    
  }
  .marquee-rtl > :first-child {
    display: inline-block;                /* modèle de boîte en ligne */
    padding-right: 2em;                   /* un peu d'espace pour la transition */
    padding-left: 100%;                   /* placement à droite du conteneur */
    white-space: nowrap;                  /* pas de passage à la ligne */
    animation: defilement-rtl 15s infinite linear;
  }


  #containerinrow1:hover{
    background-image:url('../assets/img/journal.jpeg');
  }


  @keyframes defilement-rtl {
    0% {
      transform: translate3d(0,0,0);      /* position initiale à droite */
    }
    100% {
      transform: translate3d(-100%,0,0);  /* position finale à gauche */
    }
  }




</style>