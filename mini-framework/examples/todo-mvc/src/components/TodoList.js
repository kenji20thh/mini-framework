import Component from '../../framework/core/component';
import TodoItem from './TodoItem';
import todoStore from '../store/todoStore';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoStore.getTodos(),
    };
  }

  componentDidMount() {
    todoStore.subscribe(this.updateTodos.bind(this));
  }

  updateTodos() {
    this.setState({ todos: todoStore.getTodos() });
  }

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;