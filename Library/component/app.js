import html from "../core.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import { connect } from "../store.js";
import Footer from "./Footer.js";


function App(){
    return html`
        <section class="todoapp">
            ${Header()}
            ${TodoList()}
            ${Footer()}
        </section>
    `
}

export default connect()(App)