<template>
    <img alt="Vue logo" src="../assets/logo.png">
    Counter value: {{count}}
    <button @click="incrementViaMethods">incrementViaMethods</button>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="toZero">toZero</button>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue';
import { mapMutations, mapActions } from 'vuex'


export default {

    //v2-v3
   computed: {
    count () {
      return this.$store.state.count
    }
  },
   methods: {
       ...mapMutations(['increment', 'decrement', 'toZero']),

       ...mapActions(['increment', 'incrementAsync']),

       incrementViaMethods(){
           this.$store.commit('increment')
       }
   }

    // v3
    //   setup(){
    //     const store = useStore()
    //     return {
    //         count: computed(() => store.state.count),
    //     }
    //   }
}
</script>

<style>

</style>