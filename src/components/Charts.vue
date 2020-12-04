<template>
<div id="Charts">
    <VueTradingView :options="{
       width: 1200,
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
    }" />
</div>
</template>

<script>
import VueTradingView from 'vue-trading-view';

export default {
  name: 'Charts',
  props: {
    msg: String
  },
  components: {
    VueTradingView,
  }
}
</script>