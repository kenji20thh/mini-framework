import { Component } from '../../../framework/core/component';
import { todoStore } from '../store/todoStore';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todoStore.getTodos(),
            newTodo: ''
        };
    }

    componentDidMount() {
        todoStore.subscribe(this.updateTodos);
    }

    componentWillUnmount() {
        todoStore.unsubscribe(this.updateTodos);
    }

    updateTodos = () => {
        this.setState({ todos: todoStore.getTodos() });
    }

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    handleAddTodo = () => {
        if (this.state.newTodo.trim()) {
            todoStore.addTodo(this.state.newTodo);
            this.setState({ newTodo: '' });
        }
    }

    render() {
        return (
            <div>
                <h1>TodoMVC</h1>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onInput={this.handleInputChange}
                    placeholder="Add a new todo"
                />
                <button onClick={this.handleAddTodo}>Add</button>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoApp;