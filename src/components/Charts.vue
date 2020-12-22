<template>
  <div id="info" class="content text-center row">
    <div class="col-lg-8 fit-content row">
      
      <div class="col-lg-5" :key="Exchange">
        <h3>Exchange:</h3>
        <button @click="Exchange = 'COINBASE:'"><h6>Coinbase</h6></button>
        <button @click="Exchange = 'BINANCE:'"><h6>Binance</h6></button>
        <button @click="Exchange = 'HUOBI:'"><h6>Huobi</h6></button>
        <button @click="Exchange = 'FTX:'"><h6>Ftx</h6></button>
        <button @click="Exchange = 'KUCOIN:'"><h6>Kucoin</h6></button>
        <button @click="Exchange = 'UNISWAP:'"><h6>Uniswap</h6></button>
      </div>
    <div class="col-lg-2">
      <button style="border-color: rgb(190, 169, 51)" @click="Exchange =  bestExchange ; Currency = bestCurrency">
         <h6 style="color: rgb(190, 169, 51)">Find the best</h6>
         <h6 style="color: rgb(190, 169, 51)">Exchange / Pair </h6>
      </button>
    </div>
      <div class="col-lg-5" :key="Currency">
        <h3>Pair:</h3>
        <button @click="Currency = 'USD'"> {{searchQuery.toUpperCase()}} / USD</button>
        <button @click="Currency = 'EUR'"> {{searchQuery.toUpperCase()}} / EUR</button>
        <button @click="Currency = 'USDT'">{{searchQuery.toUpperCase()}} / USDT</button>
        <button @click="Currency = 'BTC'"> {{searchQuery.toUpperCase()}} / BTC</button>
        <button @click="Currency = 'ETH'"> {{searchQuery.toUpperCase()}} / ETH</button>
      </div>
      <input
        class="col-lg-12 text-center"
        type="text"
        v-model="searchQuery"
        placeholder="Search a cryptocurrency.."
      />
      <div
        class="col-lg-2.5 text-center"
        v-for="info in filteredList"
        :key="info.infos"
      >
        <li>
          <button
            @click="
              mesOptions.symbol = Exchange + info.symbol.toUpperCase() + Currency;
              refreshChart++;
              searchQuery = '';
            "
          >
            <h4>{{ info.name }}</h4>
            <img :src="info.image" :alt="info.name" />
          </button>
        </li>
      </div>
      <VueTradingView
        class="col-lg-12"
        :options="mesOptions"
        :key="refreshChart"
      />
    </div>

    <div class="col-lg-4 text-center">
      <div v-for="info in infos" :key="info.infos">
        <div v-if="info.symbol == optionSymbol">
          <div class="col-lg-12 row text-center justify-content-center">
            <div class="col-lg-4">
              <h4>#{{ info.market_cap_rank }}</h4>
            </div>

            <div class="col-lg-4">
              <h1>{{ info.name }}</h1>
              <p>({{ info.symbol }})</p>
            </div>

            <div class="col-lg-4">
              <h5>${{ info.current_price.toLocaleString() }}</h5>
              <span
                :class="
                  changeColor(info.price_change_percentage_24h_in_currency)
                "
              >
                ({{
                  info.price_change_percentage_24h_in_currency
                    | currencydecimal
                }}%)
              </span>
            </div>

            <b-img :src="info.image" :alt="info.name"></b-img>
          </div>

          <div class="col-lg-12 row text-center">
            <div class="col-lg-6">
              <h6>Market Cap</h6>
              <p>${{ info.market_cap.toLocaleString() }}</p>
              <h6>Circulating Supply</h6>
              <p>{{ info.circulating_supply.toLocaleString() }}</p>
              <h6>24h High</h6>
              <p>${{ info.high_24h.toLocaleString() }}</p>
            </div>
            <div class="col-lg-6">
              <h6>Volume (24h)</h6>
              <p>${{ info.total_volume.toLocaleString() }}</p>
              <h6>Total Supply</h6>
              <p>{{ info.total_supply.toLocaleString() }}</p>
              <h6>24h Low</h6>
              <p>${{ info.low_24h.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view";
import Axios from "axios";

export default {
  name: "Charts",
  components: {
    VueTradingView,
  },
  data() {
    return {
      infos: null,
      loading: true,
      errored: false,
      searchQuery: "",
      Exchange: "COINBASE:",
      Currency: "USD",
      refreshChart: 0,
      mesOptions: {
        studies: ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
        width: "-webkit-fill-available",
        symbol: "COINBASE:BTCUSD",
        height: 753,
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbag_bg: "#f1f3f6",
        enable_publishing: false,
        interval: "W",
        allow_symbol_change: true,
        hide_side_toolbar: false,
      },
    };
  },
  computed: {
    optionSymbol() {
      return this.mesOptions.symbol
        .toLowerCase()
        .split(":")
        .pop(1)
        .slice(0, -3);
    },
    best() {
      return "Mon Algo!";
    },
    filteredList() {
      if (this.searchQuery === "") return [];
      return this.infos.filter((item) => {
        return (
          item.symbol.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  filters: {
    currencydecimal(value) {
      if (value == null) {
        return "nd";
      } else {
        return value.toFixed(2);
      }
    },
  },
  mounted() {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9999&sparkline=false&price_change_percentage=24h"
    )
      .then((response) => (this.infos = response.data))
      .catch((error) => {
        console.log(error), (this.errored = true);
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    changeColor(value) {
      if (value > 0) {
        return "text-success";
      } else if (value < 0) {
        return "text-danger";
      } else {
        return "text-warning";
      }
    },
  },
};
</script>

<style>
input {
  width: fit-content;
  margin: 12px -3px;
  padding: 12px;
  box-sizing: border-box;
}

img {
  height: fit-content;
  width: fit-content;
}

p {
  font-size: 100%;
}
</style>