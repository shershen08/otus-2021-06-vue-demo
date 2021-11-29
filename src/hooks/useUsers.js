import { useStore } from 'vuex'
import {computed, onMounted} from 'vue';

const useUsers = (initialLoad = false) => {
    const store = useStore()

      const getUsers = () => store.dispatch('getUsers');
      const users =  computed(() => store.state.users.data);

      if(initialLoad) {
        onMounted(() => {
            getUsers();
        })
      }

      return {
        getUsers,
        users
      }

}


export default useUsers;