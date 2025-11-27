# Advanced Usage of the Mini Framework

This document outlines advanced patterns and examples for using the Mini Framework effectively. It covers topics such as component composition, state management strategies, and custom event handling.

## Component Composition

### Higher-Order Components (HOCs)

Higher-Order Components are functions that take a component and return a new component, enhancing its functionality. This pattern is useful for code reuse and separation of concerns.

```javascript
function withLogging(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            console.log(`${WrappedComponent.name} mounted`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
```

### Render Props

Render props is a technique for sharing code between components using a prop that is a function. This allows for more flexible component composition.

```javascript
class DataFetcher extends Component {
    state = { data: null };

    componentDidMount() {
        fetchData().then(data => this.setState({ data }));
    }

    render() {
        return this.props.render(this.state.data);
    }
}

// Usage
<DataFetcher render={data => <DisplayData data={data} />} />
```

## State Management Strategies

### Local vs. Global State

Decide whether to manage state locally within components or globally using the store. For simple components, local state is sufficient, while complex applications may benefit from a centralized store.

### Using Observables

Leverage the observable pattern for reactive state management. Components can subscribe to state changes and automatically re-render when the state updates.

```javascript
const observableState = new Observable();

class MyComponent extends Component {
    componentDidMount() {
        this.unsubscribe = observableState.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <div>{observableState.getValue()}</div>;
    }
}
```

## Custom Event Handling

### Event Bus

Utilize the global event bus for decoupled communication between components. This allows components to listen for and emit events without direct references.

```javascript
// Emitting an event
eventBus.emit('userLoggedIn', userData);

// Listening for an event
eventBus.on('userLoggedIn', (data) => {
    console.log('User logged in:', data);
});
```

### Component-Level Events

Implement component-level event emitters for localized event handling. This is useful for managing events that are specific to a component's lifecycle.

```javascript
class MyComponent extends Component {
    constructor() {
        super();
        this.eventEmitter = new EventEmitter();
    }

    componentDidMount() {
        this.eventEmitter.on('customEvent', this.handleCustomEvent);
    }

    handleCustomEvent = () => {
        // Handle the event
    };

    render() {
        return <button onClick={() => this.eventEmitter.emit('customEvent')}>Click me</button>;
    }
}
```

## Conclusion

These advanced patterns enhance the flexibility and maintainability of applications built with the Mini Framework. By leveraging component composition, effective state management, and custom event handling, developers can create robust and scalable applications.