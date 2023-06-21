<template>
    <div>
        <MovieCard/>
    </div>
</template>
<script>
import MovieCard from './MovieCard.vue'
import {store} from '../store'

export default {
    
    name: 'AppMain',
    components: {
        MovieCard
    },
    data() {
        return {
            store,
            apiUri: 'https://api.themoviedb.org/3/search/movie',
            apiKei: '0de59865ade9fe62fa14d1dc51b0fa54'
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>