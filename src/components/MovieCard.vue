<template>
    <div>
        <h3>
            AppMovie
        </h3>
    </div>
</template>
<script>
import { store } from '../store.js';
export default {
    name: 'MovieCard', 
    props: {

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