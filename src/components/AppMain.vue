<template>
    <div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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
            store
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>