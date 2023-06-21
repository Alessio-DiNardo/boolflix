<template>
    <div>
        <h2>
            MovieList
        </h2>
        <AppMovie/>
    </div>
</template>
<script>
import AppMovie from './AppMovie.vue'
export default {

    name: 'MovieList',
    components: {
        AppMovie,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>