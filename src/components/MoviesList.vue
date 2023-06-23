<template>
    <div>
        <article v-for="movie in movies">
            <h2>
                {{ movie.title }}
            </h2>
            <h4>
                {{ movie.original_title }}
            </h4>
            <p>
                {{ movie.original_language }}
                {{ movie.vote_average }}
            </p>
        </article>
    </div>
</template>
<script>

export default {
    
    name: 'MovieList',
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
    
</style>