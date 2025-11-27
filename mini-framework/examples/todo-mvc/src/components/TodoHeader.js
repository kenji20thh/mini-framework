import { Component } from '../../../framework/core/component';

class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newTodo.trim()) {
            this.props.onAddTodo(this.state.newTodo);
            this.setState({ newTodo: '' });
        }
    }

    render() {
        return (
            <header className="header">
                <h1>TodoMVC</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        autoFocus
                    />
                </form>
            </header>
        );
    }
}

export default TodoHeader;