<template>

<div class="content row">
  <div class="col-lg-8">
<VueTradingView 
    :options="{
      width: '-webkit-fill-available',
      height: 800,
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
  <div class="col-lg-4 border ">Bitcoin <br> 
  Price: <br> Volume (24) </div>
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
