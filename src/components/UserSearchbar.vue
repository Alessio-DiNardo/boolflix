<template>
    <div>
        <input type="text" name="user-search" id="user-search" v-model="searchInput">
        <button @click="$emit('searched',searchInput)" >search</button>
    </div>
    
    
</template>
<script>
export default {
    
    name: 'UserSearchbar',
    props: {
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        log(message){
            console.warn(message)
        },
        
    },
}
</script>
<style lang="scss" scoped>
    
</style>