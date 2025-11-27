import { Component } from '../../../framework/core/component';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    };
  }

  setFilter(filter) {
    this.setState({ filter });
    this.props.onFilterChange(filter);
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.remainingCount}</strong> item(s) left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className={this.state.filter === 'all' ? 'selected' : ''} onClick={() => this.setFilter('all')}>All</a>
          </li>
          <li>
            <a href="#/active" className={this.state.filter === 'active' ? 'selected' : ''} onClick={() => this.setFilter('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={this.state.filter === 'completed' ? 'selected' : ''} onClick={() => this.setFilter('completed')}>Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default TodoFooter;