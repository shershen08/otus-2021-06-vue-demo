<template>
    <div>

        <h1 v-bind:class="{'error': isError}"
            v-bind:style="{'font-size': fontSizeVal}">title</h1>


        <!-- {{name}} -->

<!--         
        
        <h3 v-if="isError">Hey, there's error!</h3>
        <h3 v-else>No error</h3>


        <form>
            <div class="input-group mb-3">
                <template v-if="showUsername">
                    <label>Username</label>
                    <input type="text" class="form-control"
                            placeholder="Username" >
                </template>
                <template v-if="!showUsername">
                    <label>Email</label>
                    <input type="text" class="form-control" 
                    placeholder="Email">
                </template>
            </div>
        </form>



        
        <button v-on:click="foo">change name</button>
        <button v-on:click="bar('someval', $event)">change name</button> -->

        <!-- v-bind -->


    <div>
        <UserItem v-for="(user, index) in tailoredUserData(users)"
                @remove="removeUser"
                :index="index"
                v-bind:user="user"
                remove-action-title="remove users"
                :key="user.id"/>
    </div>


    </div>
</template>

<script>
import users from './usersMock';
import UserItem from './UserItem.vue';

export default {
    name: 'Demo',
    data: ()=> ({
        aaa: 1,
        bbb: 2,
        name: 'Vasya',
        isError: true,
        fontSizeVal: 42,
        showUsername: false,
        users
    }),
    methods: {
        tailoredUserData(list){
            return list.map(i => ({
                name: i.name, 
                phone: i.phone,
                catchPhrase: i.company.catchPhrase
            }))
        },
        removeUser(id){
            this.users = this.users.filter(i => i.id !== id)
        },
        foo(e){
            console.log(e)
            this.isError = true;
            this.name = 'Petya'
        },
        bar(newName, e) {
            console.log(e)
            this.isError = false;
            this.name = newName
        }
    },
    components: {
        UserItem
    }
}
</script>

<style src="./Demo.styles.css">
</style>