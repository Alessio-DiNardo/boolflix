<template>
    <div>
        <article v-for="movie in movies">
            <h2>
                {{ movie.title }}--{{ movie.original_title }}
            </h2>
            <img v-if="isLanguageAvalable(movie.original_language)"  
            :src="getImagePath(movie.original_language)" alt="Language flag" class="language-flag">
            <span v-else>
                {{ movie.original_language }}
            </span>
            <p>
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
    methods: {
        isLanguageAvalable(language){
            if (this.availableFlags.includes(language + '.png')){
                return true
            }

            return false;
        },

        getImagePath(imgSource){
            return new URL(`../assets/img/flags${imgSource}.png`, import.meta.url).href;
        }
    },
    data() {
        return {
            availableFlags : ['en.png','fr.png','it.png','ja.png','ru.png']
        }
    },
}
</script>
<style lang="scss" scoped>
    img.language-flag{
        width: 40px;
    }
</style>