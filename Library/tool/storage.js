const STORAGE_KEYS= 'TODOS'

export default{
    get(){
        return JSON.parse(localStorage.getItem(STORAGE_KEYS)) || []
    },
    set(todos){
        localStorage.setItem(STORAGE_KEYS, JSON.stringify(todos));
    }
}