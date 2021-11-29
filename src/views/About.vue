<template>
  About

  <hr>
  User: {{id}}
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  props: ['id'],
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