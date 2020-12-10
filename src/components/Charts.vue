<template>
  <div id="info" class="content row">
    <div class="col-lg-8">
      <VueTradingView :options="mesOptions" />
    </div>

    <div class="col-lg-4">
      <b-card-body v-for="info in infos" :key="info.infos">
        <span v-if="info.symbol == optionSymbol">
          <tr>
            <td>#{{ info.market_cap_rank }}</td>
            <td><b-img :src="info.image" :alt="info.name"></b-img></td>
            <td>
              <h4>{{ info.name }}</h4>
              <span> ({{ info.symbol }})</span>
            </td>
            <td>
              <p>$ {{ info.current_price }}</p>
            </td>
            <!--A améliorer des que possible -->
            <td v-if="info.price_change_percentage_24h < 0" style="color: red">
              {{ info.price_change_percentage_24h | currencydecimal }} %
            </td>
            <td v-else style="color: green">
              {{ info.price_change_percentage_24h | currencydecimal }} %
            </td>
            <!--sale-->
            <td>
              <p>$ {{ info.total_volume }}</p>
            </td>
          </tr>
        </span>
      </b-card-body>
    </div>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view";
import Axios from "axios";

export default {
  name: "Charts",
  props: {
    msg: String,
  },
  components: {
    VueTradingView,
  },
  el: "#info",
  data() {
    return {
      infos: null,
      loading: true,
      errored: false,
      mesOptions: {
        studies: ["OBV@tv-basicstudies"],
        width: "-webkit-fill-available",
        symbol: "COINBASE:BTCUSD",
        height: 753,
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbag_bg: "#f1f3f6",
        enable_publishing: false,
        range: "ALL",
        hide_side_toolbar: false,
        allow_symbol_change: true,
      },
    };
  },
  computed: {
    optionSymbol() {
      return this.mesOptions.symbol.toLowerCase().split(":").pop(1).substring(0,3);
    },
  },
  filters: {
    //Aroondir à 2 chiffres après la virgule
    currencydecimal(value) {
      if (value == null) {
        return "nd";
      } else {
        return value.toFixed(2);
      }
    },
  },
  mounted() {
    //Récuperation de données de l'api
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    )
      .then((response) => (this.infos = response.data))
      // Pour récuperer les ereurs dans la console
      .catch((error) => {
        console.log(error), (this.errored = true);
      })
      //Arreter l'aniation a la fin du chargement
      .finally(() => (this.loading = false));
  },
};
</script>
