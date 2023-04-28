
export default function logger(reducer){
    return (state, action, args) =>{
        console.group(action)
        console.log('state: ',state);
        console.log('args: ', args);
        const nextState = reducer(state, action, args);
        console.log(nextState);
        console.groupEnd();
        return nextState;
    }
}