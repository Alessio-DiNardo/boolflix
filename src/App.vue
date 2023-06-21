<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
import axios from 'axios';
import { store } from './store.js';
export default {
    name: 'App', 
    components: {
      AppMain,
      AppHeader,
    },
    data() {
        return {
            store,
        }
    },
    created(){
                axios.get('')
                .then( (response) => {
                console.log(response);
                
            })
                .catch(function (error) {
                console.log(error);
        })
    }
}
</script>

<template>
  <AppMain/>
  <AppHeader/>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

</style>
