<template>
    <h1>BOOLFLIX</h1>
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



    <MovieCard/>
    
    
</template>
<script>
import MovieCard from './MovieCard.vue'
import {store} from '../store'
export default {
    
    name: 'AppMain',
    components: {
        MovieCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>