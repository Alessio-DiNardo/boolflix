<template>
    <div>
        <h1>
            AppMain
        </h1>
        <MovieList/>
    </div>
</template>
<script>
import MovieList from './MovieList.vue'

export default {
    
    name: 'AppMain',
    components: {
        MovieList,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>