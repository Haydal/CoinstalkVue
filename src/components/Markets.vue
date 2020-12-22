<template>
    <div id="coin">
            <!--Message d'ereur si chargement impossible-->
             <section v-if="errored">
                <p>We are sorry, we are unable to retrieve this information at this time. Please retry later</p>
            </section>
                    
            <section v-else>
                <!--spinner en cours de chargement-->
                <div v-if="loading" class="text-center">
                    <b-spinner variant="light" label="Loading..."></b-spinner>
                </div>
                <div>
                <b-button v-b-toggle.collapse-1 class="m-2" variant="dark"><b-icon icon="sliders"></b-icon> Filters</b-button>
                <b-collapse id="collapse-1" class="mt-2 ">
                        <b-form-group label="Nbs per page" class="d-inline p-2">
                            <b-form-radio v-model="per_page" name="per-pages" value="50">50</b-form-radio>
                            <b-form-radio v-model="per_page" name="per-pages" value="100">100</b-form-radio>
                            <b-form-radio v-model="per_page" name="per-pages" value="250">250</b-form-radio>
                        </b-form-group>
                        <b-form-group label="Currency" class="d-inline p-2">
                            <b-form-radio v-model="currency" name="currency_radio" value="usd">$</b-form-radio>
                            <b-form-radio v-model="currency" name="currency_radio" value="eur">€</b-form-radio>
                            <b-form-radio v-model="currency" name="currency_radio" value="jpy">¥</b-form-radio>
                        </b-form-group>
                         <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        aria-controls="my-table"
                        align="center"
                    ></b-pagination>
                </b-collapse>
                </div>
                <!-- Implementation de la data de l'api "infos" dans le tableau pour interagir-->
               
                <v-table 
                    :data="infos"
                    :hideSortIcons="true"
                    class="table table-striped table-dark"
                >
                    <thead slot="head">
                        <!---Balise "v-th" pour indiquer les colonnes actives--->    
                            <v-th scope="col" sortKey="market_cap_rank" defaultSort="asc">Rank</v-th>
                            <th scope="col">Logo</th>
                            <v-th scope="col" sortKey="name">Name</v-th>
                            <v-th scope="col" sortKey="current_price">Price</v-th>
                            <v-th scope="col" sortKey="price_change_percentage_24h_in_currency">Last(24h)</v-th>
                            <v-th scope="col" sortKey="price_change_percentage_7d_in_currency">Last(7d)</v-th>
                            <v-th scope="col" sortKey="total_volume">Volume</v-th>
                            <th scope="col">Last 7d</th>
                    </thead>
                    <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="info in displayData" :key="info.guid">
                            <td>#{{ info.market_cap_rank }}</td>
                            <td><b-img :src="info.image" :alt="info.name"></b-img></td>
                            <td><h4>{{ info.name }}</h4><span>({{ info.symbol }})</span></td>
                            <td>{{ symbCurrency }} {{ info.current_price }}</td>
                            <td :class="changeColorCurrency(info.price_change_percentage_24h_in_currency)">{{ info.price_change_percentage_24h_in_currency | currencydecimal }}  %</td>
                            <td :class="changeColorCurrency(info.price_change_percentage_7d_in_currency)">{{ info.price_change_percentage_7d_in_currency | currencydecimal }}  %</td>
                            <td>{{ symbCurrency }} {{ info.total_volume }}</td>
                            <td>
                                <sparkline :indicatorStyles="spIndicatorStyles">
                                    <sparklineLine
                                    :data="info.sparkline_in_7d.price"
                                    :limit="info.sparkline_in_7d.price.length"
                                    :styles="changeColorSparkline(info.sparkline_in_7d.price[0], info.sparkline_in_7d.price[info.sparkline_in_7d.price.length -1])"
                                    :refLineStyles="spRefLineStyles"
                                />
                                </sparkline>
                               

                            </td>
                        </tr>
                    </tbody>    
                </v-table>
            </section>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Markets',
    el: '#coin',
        data:() => ({
            infos: null,
            loading: true,
            errored: false,
            //Pagination
            currentPage: 1,
            rows: 200,
            //Filtres
            per_page: 50,
            currency: "usd",
            symbCurrency: "$",
            //ColorSparline
            spIndicatorStyles:false,
            spRefLineStyles:false,
            colorGreen:{
                stroke: '#28a745'
            },
            colorRed:{
                stroke: '#dc3545'
            },
            colorOrange:{
                stroke: '#fd7e14'
            }
        }),
        filters: ({
            //Arondir à 2 chiffres après la virgule
            currencydecimal (value) {
                if(value == null){
                    return "nd"
                }else {
                    return value.toFixed(2)
                }    
            },
           
        }),
        methods: {
            init(){
                  //Récuperation de données de l'api
                Axios
                .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + this.currency + "&order=market_cap_desc&per_page=" + this.per_page + "&page=" + this.currentPage + "&sparkline=true&price_change_percentage=24h%2C7d")
                .then(response => (this.infos = response.data))
                    //Pour récuperer les erreurs dans la console
                .catch(error => {
                    console.log(error),
                    this.errored = true
                })
                    //Arreter l'animation à la fin du chargement
                .finally(() => this.loading = false)
            },
            changeColorCurrency(value) {
                if(value > 0){
                    return 'text-success'
                }else if (value < 0){
                    return 'text-danger'
                }else{
                    return 'text-warning'
                }
            },
            changeColorSparkline(value1,value2) {
                if(value1 > value2){
                    return this.colorRed
                }else if (value1 < value2){
                    return this.colorGreen
                }else{
                    return this.colorOrange
                }
            }
        },
        mounted() {
            //Pour pouvoir relancer l'api 
            this.init()     
        },
        watch:{
            per_page(){
                this.init()
            },
            currentPage(){
                this.init()
            },
            currency(){
            if (this.currency == "eur") {
                this.symbCurrency = "€"
            } else if (this.currency == "usd") {
                this.symbCurrency = "$"
            }else{
                this.symbCurrency = "¥"
            }
            this.init()
            }
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

th:hover{
    cursor: pointer;
}

.vt-sort:before{
    font-family: FontAwesome;
    padding-right: 0.5em;
    width: 1.28571429em;
    display: inline-block;
    text-align: center;
}

.vt-sortable:before{
    content: "\f338";
}

.vt-asc:before{
    content: "\f160";
}

.vt-desc:before{
    content: "\f161";
}
</style>
