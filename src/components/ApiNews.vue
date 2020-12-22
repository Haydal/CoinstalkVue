<template>
  <div>{{ response }}</div>
</template>

<script>
import Axios from "axios";

export default {
  name: "apinews",
  el: "#news",
  data: () => ({
    infos: "",
  }),
  mounted() {
    Axios
    fetch(
      'https://financialtimesmikilior1v1.p.rapidapi.com/getAspectsList',
      {
        method: "GET",
        headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': '7b88911ca1msh6dec5108374285bp100e15jsn26535cb95558',
    'x-rapidapi-host': 'FinancialTimesmikilior1V1.p.rapidapi.com'
        },
          
      }
    ).then((response) => {
      this.infos = response.body; 
      console.log(this.infos);  
    });
  },
};
</script>
