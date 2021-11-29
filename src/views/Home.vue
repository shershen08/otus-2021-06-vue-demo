<template>
  <!-- Home -->
  <h1>{{foo}}</h1>


<p v-custom-color="abv" color="pink" size="34">{{capitalise('some text')}}
</p>

<p v-custom-color="abv" color="white" size="14">some text</p>

<p v-custom-color color="blue">{{capitalise('some text')}}</p>



    <form>
  name: <input v-model="name"/> ({{fooBar}})<br>
  lastname: <input v-model="lastname" v-focus/><br>

  <button @click="send"
            v-bind:disabled="!valid"
            >send</button>

    </form>
  <br><br>

  My fullname is: {{fullName}}
</template>

<script>

import {ref, computed, watch} from 'vue';


import useName from '../hooks/useName';
import {sendData} from '../hooks/useSendData';

export default {
    //v2
    // data: () => ({
    //     name: '',
    //     lastname: ''
    // }),
    //v3
    //
    setup(){
          
        const {  name, lastname,
                fullName, nameLength, valid} = useName(3)

        const send = () => {
            sendData('/api', {
                name: name.value,
                lastname: lastname.value
            }) 
        }

        return {
            name,
            lastname,
            fooBar: nameLength,
            fullName,
            // nameLength, //!!
            valid,
            send
            // SIMPLECONST
        }
    },  
    //
    //v2
    //
    // computed: {
    //     fullName(){
    //         return this.name +  ' ' + this.lastname 
    //     },
    //     nameLength(){
    //         return this.name.length;
    //     },
    // },
    // watch: {
    //     name: 'nameCallback'
    // },
    methods: {
        // send(e){
        //     e.preventDefault();
        //     console.log('sending', this.name, this.lastname)
        // },
        // nameCallback(val){
        //     //
        //     //
        //     console.log(val)
        //     //
        //     this.valid = val.length > 0 && this.lastname.length > 0
        // }
    }
}
</script>

<style>

</style>