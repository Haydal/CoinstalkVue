<template>
  <div class="content row">
    <div class="col-lg-8">
      <VueTradingView
        :options="{
          studies: ['MACD@tv-basicstudies', 'RSI@tv-basicstudies'],
          width: '-webkit-fill-available',
          height: 753,
          symbol: 'COINBASE:BTCUSD',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbag_bg: '#f1f3f6',
          enable_publishing: false,
          range: 'ALL',
          hide_side_toolbar: false,
          allow_symbol_change: true,
        }"
      />
    </div>
    <div class="col-lg-4">
      <h1>Bitcoin</h1>
      <br />
      <h6>Price:</h6>
      <br />
      <h6>Volume (24):</h6>
      <br />
      <h6>Total Market Cap:</h6>
      <br />
      <h6>Total supply:</h6>
      <br />
      <h6>Circulating supply:</h6>
      <br />
      <h2>About #Bitcoin:</h2>
    </div>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view";

export default {
  name: "Charts",
  props: {
    msg: String,
  },
  components: {
    VueTradingView,
  },
};
</script>
