import { createStore } from 'vuex'
import { getUsers } from '../repository/users'

const store = createStore({
    state () {
      return {
        count: 0,
        users: {
          loading: false,
          error: false,
          data: []
        }
      }
    },
    //
    // actions -> mutations
    //
    // component -> actions ---- store.dispatch
    // component -> mutations   ----- store.commit

    //sync
    mutations: {
      increment (state) {
        state.count++
      },
      decrement (state) {
        state.count--
      },
      toZero (state) {
        state.count = 0;
      },
      setLoading (state, value){
        state.users.loading = value;
      },
      setUsers (state, data) {
        state.users.data = data;
      }
    },
    //async
    actions: {
        increment(context){
            context.commit('increment')
        },
        incrementAsync(context){
            setTimeout(() => {
                context.commit('increment')
            }, 1500)
        },
        getUsers(context){
          context.commit('setLoading', true)
          getUsers().then(data => {
            context.commit('setLoading', false)
            context.commit('setUsers', data)
          })
        }
    }
  })

  export default store;
  