<template>
  <div class="card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h5 class="card-title">{{index + 1}} {{user.name}}</h5>
            <p class="card-text">{{user.catchPhrase}}</p>
            <a href="#" class="btn btn-primary">{{user.phone}}</a>
            <button v-on:click="onRemoveUser">{{removeActionTitle}}</button>
        </div>
        </div>
</template>

<script>

//REACT:
//propTypes
//defaultProps

export default {
    name: 'UserItem',
    methods: {
        onRemoveUser(){
            this.$emit('remove', this.user.id)
        }
    },
    // props: ['user', 'index']
    emits: ['remove'],
    props: {
        removeActionTitle: String,
        user: {
            type: Object,
            reqiured: true,
            default: {}
        },
        index: {
            type: Number,
            required: true,
            // default: 42
        }
    }
}
</script>

<style>

</style>