<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
import axios from 'axios';
import { store } from './store.js';
export default {
    name: 'App', 
    components: {
        AppMain,
        AppHeader,
    },
    data() {
        return {
            store,
            apiUri: 'https://api.themoviedb.org/3/search/movie?',
            api_Key: '0de59865ade9fe62fa14d1dc51b0fa54'
        }
    },
    methods: {
        searchMovie(movie){
            console.log(movie);
            axios.get(this.apiUri, {
                params: {
                    api_Key: this.apiKey,
                    query: movie,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.store.movieList = response.data.results
            })
        }
    }
    
}
</script>

<template>
    <AppMain/>
    <AppHeader @movie="searchMovie" />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

</style>
