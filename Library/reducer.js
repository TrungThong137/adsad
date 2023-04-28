import storage from "./tool/storage.js";

const init = {
    todos: storage.get(),
    editIndex: null,
    filter: 'All',
    filters: {
        All: ()=> true,
        Active: todo=> !todo.completed,
        Completed: todo => todo.completed
    }
}

const actions ={
    add(state, title){
        state.todos.push({title, completed: false})
        storage.set(state.todos)
    },
    Delete(state, index){
        state.todos.splice(index, 1);
        storage.set(state.todos)
    },
    toggleAll(state, completed){
        state.todos.forEach(todo => todo.completed=completed);
        storage.set(state.todos);
    },
    toggle(state, index){
        const todo= state.todos[index];
        todo.completed = !todo.completed;
        storage.set(state.todos)
    },
    editLable(state, index){
        state.editIndex =index
    },
    saveEdit(state, title){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title =title
                storage.set(state.todos)
            }else{
                this.Delete(state, state.editIndex);
            }
            state.editIndex=null;
        }
    },
    switchFilter(state, type){
        state.filter=type
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.Active);
        storage.set(state.todos)
    }
}

export default function reducer(state=init, action, args){
    actions[action] && actions[action](state, args);
    return state;
}