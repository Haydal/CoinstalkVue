<template>
<div>
<ul>
  <li><router-link :to="{ name: 'home'}">Home</router-link></li>
  <li><router-link :to="{ name: 'markets'}">Markets</router-link></li>
  <li><router-link :to="{ name: 'news'}">News</router-link></li>
  <li><router-link :to="{ name: 'charts'}">Charts</router-link></li>  
</ul>
</div>
</template>


<script>

export default {
  name:'Nagigation',
}


</script>