import { ref } from 'vue'//Using the Vue composition API hooks to create reactive data


//A count variable and a function increasing the count
    const count = ref(0)

    const increament = () => count.value++

//Exporting all the data, methods etc that have been created
export default {count , increament}