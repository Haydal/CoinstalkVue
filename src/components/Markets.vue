
<template>
    <div id="coin">
        <h1>Bitcoin Price Index</h1>
            <!--Message d'ereur si chargement impossible-->
             <section v-if="errored">
                <p>We are sorry, we are unable to retrieve this information at this time. Please retry later</p>
            </section>

            <section v-else>
                <div v-if="loading">Loading...</div>

                <div v-for="currency in info" clas="currency" :key="currency.info">
                        {{ currency.description }}:
                        <b-badge>
                            {{ currency.rate_float | currencydecimal }}
                            <b-badge v-html="currency.symbol"></b-badge>
                        </b-badge>
                    </div>
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
                info: null,
                loading: true,
                errored: false
            }
        },
        mounted () {
            //Récuperation de données de l'api
            Axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
            // Pour récuperer les ereurs dans la console
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        },
        filters: {
            //Arrondir à 2 décimales après la virgule 
            currencydecimal (value) {
                return value.toFixed(2)
            }
        }
        
}
</script>


