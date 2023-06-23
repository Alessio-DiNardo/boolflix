<template>
    <div>
        <input type="text" name="user-search" id="user-search" v-model="searchInput">
        <button @click="log(searchInput)" >search</button>
    </div>
    
    
</template>
<script>
export default {
    
    name: 'UserSearchbar',
    props: {
        
    },
    data() {
        return {
            searchInput : ''
        }
    },
    methods: {
        log(message){
            console.warn(message)
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>