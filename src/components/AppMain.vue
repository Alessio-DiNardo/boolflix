<template>
    <div>
        <h1>
            AppMain
        </h1>
        <h2>
            {{ store.searchText }}
        </h2>
        <MovieList/>
    </div>
</template>
<script>
import MovieList from './MovieList.vue'
import {store} from '../store'
export default {
    
    name: 'AppMain',
    components: {
        MovieList,
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