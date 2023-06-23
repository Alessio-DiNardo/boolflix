<template>
    <h1>BOOLFLIX</h1>
        <UserSearchbar/>
        <MoviesList/>

    
    
</template>
<script>
import UserSearchbar from './UserSearchbar.vue';
import MoviesList from './MoviesList.vue';
export default {
    
    name: 'AppMain',
    components: {
        UserSearchbar,
        MoviesList,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>