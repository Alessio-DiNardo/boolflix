<template>
    <div>
        <h1>
            AppMain
        </h1>
        <h2>
            {{ store.searchText }}
        </h2>
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