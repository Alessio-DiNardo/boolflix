<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
export default {
    name: 'App', 
    components: {
      AppMain,
      AppHeader,
    },
    data() {
        return {
            
        }
    },
}
</script>

<template>
  <AppMain/>
  <AppHeader/>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

</style>
