<template>
    <div class="card-wrapper">
            <SingleCard  v-for="movie in movies" :movie="movie"/>
    </div>
</template>
<script>
import SingleCard from './SingleCard.vue';
export default {
    
    name: 'MovieList',
    components: {
        SingleCard
    },
    props: {
        movies: Array
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    img.language-flag{
        width: 40px;
    }
</style>