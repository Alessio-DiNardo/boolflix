<template>
    
    <div class="cards-title">
        <h2>
            {{ movie.title }}-- <em>{{ movie.original_title }}</em>
        </h2>
    </div>
    <div class="cardbody">
        <img  v-if="isLanguageAvailable(movie.original_language)" :src="getImagePath(movie.original_language)" alt="Language flag" class="language-flag">
        <span v-else>
            {{ movie.original_language }}
        </span>
        <p>
            {{ movie.vote_average }}
        </p>
    </div>
</template>
<script>

export default {
    name: 'SingleCard', 
    data() {
        return {
            availableFlags : ['en.png','fr.png','it.png','ja.png','ru.png']
        }
    },
    methods:{
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
    }
}
</script>
<style lang="scss" scoped>
    
</style>