import {ref, computed, watch} from 'vue';

const useName = (minValue = 0) => {


    //state <--- redux
    //routing <-----

    const name = ref('');  //name != '' ----> {value: '', ...}
    const lastname = ref('');


    // const anotherOne = reactive({
    //     loading: false,
    //     data: []
    // })
    
    // const counter = ref(0);
    // const state = ref({
    //     loading: false,
    //     data: []
    // })

    const SIMPLECONST = 42

    const fullName = computed(() => name.value +  ' ' + lastname.value )
    
    //2
    const nameLength = ref(0);
    watch(name, (val) => {
        nameLength.value = val.length
    })
    
    const valid = computed(() => nameLength.value > minValue && lastname.value.length > minValue);


    return {
        name,
        lastname,
        fullName,
        nameLength, //!!
        valid,
        SIMPLECONST
    }
}

export default useName;