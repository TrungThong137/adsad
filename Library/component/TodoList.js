import html from "../core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";

function TodoList(state){
    return html`
            <section class="main">
                <input id="toggle-all" class="toggle-all" type="checkbox"
                    onchange="dispatch('toggleAll', this.checked)"
                    ${state.todos.every(todo => todo.completed) && 'checked'}
                >
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    ${state.todos.filter(state.filters[state.filter]).map((todo, index) => TodoItem({todo, index}))}
                </ul>
            </section>
    `
}

export default connect()(TodoList)