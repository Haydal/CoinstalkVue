<template>
  <div class="container">

    <div class="col-lg-12 row">
       <img class="col-lg-6" src="../assets/img/btc.png" />

      <div class="col-lg-6 text-center align-self-center">
        <h2>Our assets.</h2>
        <p>
        Starting from bitcoin, we track the price of 99% of the market<br> thanks to
        our main partner Chainlink and many others joining the ecosystem
        at an accelerating rate.
        </p>
      </div>
    </div>
  </div>


</template>

<script>


export default {
  name:'Home',
  computed: {
    username() {
      
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>