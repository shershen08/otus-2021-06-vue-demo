<template>
  About

<button @click="getUsers">getUsers</button>

  {{users}}
<!-- 
<p>
  count value: {{count}}
  </p>

  <button @click="increment">increment</button>
  <button @click="asyncIncrement">asyncIncrement</button>
  <hr>
  User: {{id}} -->
</template>

<script>
import {computed, onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import useUsers from '../hooks/useUsers';

export default {
  props: ['id'],
  //v3 
  setup(){
      const store = useStore()

      const {getUsers, users} = useUsers(false);

      return {
        // access a state in computed function
        count: computed(() => store.state.count),
        increment: () => store.commit('increment'),
        decrement: () => store.commit('decrement'),
        toZero: () => store.commit('toZero'),
        asyncIncrement: () => store.dispatch('incrementAsync'),
        ///
        getUsers,
        users
      }
  }
  // setup(){
  //       const {params} = useRoute()  ///<-------3
  //       return {
  //         userId: params.id
  //       }
  // }
}
</script>

<style>

</style>