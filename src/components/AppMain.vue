<template>
    <div v-for="movie in store.movieList">
        <h1>
                Title: {{ movie.title }}
        </h1>
        <h2>
            Original title: {{ movie.original_title }}
        </h2>
        <p>
            Language: {{ movie.original_language }}
        </p>
        <p>
            Rating: {{ movie.vote_average }}
        </p>
    </div>



    <AppHeader @movie="searchMovie" />
    <MovieCard/>
    
    
</template>
<script>
import MovieCard from './MovieCard.vue'
import {store} from '../store'
import AppHeader from './AppHeader.vue'
export default {
    
    name: 'AppMain',
    components: {
        MovieCard,
        AppHeader,
    },
    data() {
        return {
            store,
            apiUri: 'https://api.themoviedb.org/3/search/movie?',
            api_Kei: '0de59865ade9fe62fa14d1dc51b0fa54'
        }
    },

    methods: {
        searchMovie(movie){
            console.log(movie);
            axios.get(this.apiUri, {
                params: {
                    api_Kei: this.api_Kei,
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
<style lang="scss" scoped>
    
</style>