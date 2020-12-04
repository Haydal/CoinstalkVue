
<template>
    <div id="coin">
            <!--Message d'ereur si chargement impossible-->
             <section v-if="errored">
                <p>We are sorry, we are unable to retrieve this information at this time. Please retry later</p>
            </section>

            <section v-else>
<<<<<<< HEAD
                <div v-if="loading">Loading...</div>

                <div v-for="currency in info" class="currency" :key="currency.info">
                        {{ currency.description }}:
                        <b-badge>
                            {{ currency.rate_float | currencydecimal }}
                            <b-badge v-html="currency.symbol"></b-badge>
                        </b-badge>
                    </div>
=======
                <!--spinner en cours de chargement-->
                <div v-if="loading" class="text-center">
                    <b-spinner :variant="light" label="Loading..."></b-spinner>
                </div>
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Logo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Last(24h)</th>
                            <th scope="col">Volume</th>
                        </tr>
                    </thead>
                    <tbody v-for="info in infos" :key="info.infos">
                        <tr>
                            <td>#{{ info.market_cap_rank }}</td>
                            <td><b-img :src="info.image" :alt="info.name"></b-img></td>
                            <td><h4>{{ info.name }}</h4><span> ({{ info.symbol }})</span></td>
                            <td><p>$ {{ info.current_price }}</p></td>
                            <td>{{ info.price_change_percentage_24h | currencydecimal}} %</td>
                            <td><p>$ {{ info.total_volume }}</p></td>
                        </tr>
                    </tbody>    
                </table>
>>>>>>> marco
            </section>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Markets',
    el: '#coin',
        data() {
            return{
                infos: null,
                loading: true,
                errored: false
            }
        },
        filters: {
            //Aroondir à 2 chiffres après la virgule
            currencydecimal (value) {
            return value.toFixed(2)
            }
        },
        mounted () {
            //Récuperation de données de l'api
            Axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
            .then(response => (this.infos = response.data))
            // Pour récuperer les ereurs dans la console
            .catch(error => {
                console.log(error),
                this.errored = true
            })
            //Arreter l'aniation a la fin du chargement
            .finally(() => this.loading = false)
        },
          
}
</script>

<style>
.spinner-border{
    width: 3rem; 
    height: 3rem;
}

td img{
    height: 2em;
    width: auto;
    background-color: white;
    border-radius: 20%;
}
</style>
