import Component from '../../framework/core/component';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: props.completed || false
        };
    }

    toggleComplete = () => {
        this.setState({ completed: !this.state.completed });
        this.props.onToggle(this.props.id);
    }

    render() {
        return (
            <li className={this.state.completed ? 'completed' : ''}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={this.state.completed} 
                        onChange={this.toggleComplete} 
                    />
                    <label>{this.props.text}</label>
                    <button className="destroy" onClick={() => this.props.onDelete(this.props.id)}></button>
                </div>
            </li>
        );
    }
}

export default TodoItem;