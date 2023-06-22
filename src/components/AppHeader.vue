<template>
    <div>
            <input  placeholder="Search the movie" aria-label="Search" v-model="store.movie">
            <button class="btn btn-outline-success" @click="$emit('movie', store.movie)" type="">Search</button>
    </div>
</template>
<script>
import { store } from '../store.js';
export default {

    name: 'AppHeader',
    components: {
        
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>