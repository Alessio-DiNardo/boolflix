<template>
    <h1>BOOLFLIX</h1>
        <UserSearchbar @searched="getMovies"/>
        <MoviesList :movies="moviesList"/>

    
    
</template>
<script>
import UserSearchbar from './UserSearchbar.vue';
import MoviesList from './MoviesList.vue';
import axios from 'axios';
export default {
    
    name: 'AppMain',
    components: {
        UserSearchbar,
        MoviesList,
    },
    data() {
        return {
            moviesApiUrl : 'https://api.themoviedb.org/3/search/movie',
            moviesList : [],
        }
    },
    methods: {
        getMovies(searchedInput){
            axios.get(' https://api.themoviedb.org/3/search/movie?=&query=', {
                params: {
                    api_key: '0de59865ade9fe62fa14d1dc51b0fa54',
                    query : searchedInput,
                }
            })
            .then( (response) => {
                console.log(response.data.results);
                this.moviesList = response.data.results
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>