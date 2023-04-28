import html from "../core.js";
import { connect } from "../store.js";

function Footer(state){
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>
                    ${state.todos.filter(todo => !todo.completed).length}
                </strong> item left
            </span>
            <ul class="filters">
                ${Object.keys(state.filters).map(type => html`
                    <li>
                        <a class="${state.filter===type && 'selected'}" href="#/"
                            onclick="dispatch('switchFilter', '${type}')"
                        >${type}</a>
                    </li>
                
                `)}
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            ${state.todos.filter(todo => todo.completed).length >0 && html`
                <button class="clear-completed"
                     onclick="dispatch('clearCompleted')"
                >Clear completed</button>
            `}
        </footer>
    `
}

export default connect()(Footer)