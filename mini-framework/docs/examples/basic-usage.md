# Basic Usage of the Mini Framework

This document provides a simple guide on how to get started with the Mini Framework. It includes examples of creating components, managing state, and setting up routing.

## Getting Started

To use the Mini Framework, you need to initialize your application and create components. Below is a basic example of how to do this.

### Step 1: Initialize the Framework

First, import the necessary functions from the framework:

```javascript
import { createElement, render } from '../framework/core/index.js';
```

### Step 2: Create a Simple Component

Define a simple component using the base `Component` class:

```javascript
class MyComponent {
  constructor(props) {
    this.props = props;
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return createElement('div', null,
      createElement('h1', null, `Count: ${this.state.count}`),
      createElement('button', { onclick: () => this.increment() }, 'Increment')
    );
  }
}
```

### Step 3: Render the Component

Now, you can render your component into the DOM:

```javascript
const app = new MyComponent();
render(app.render(), document.getElementById('app'));
```

### Step 4: Managing State

To manage state, you can use the `setState` method provided by the `Component` class. This will trigger a re-render of the component when the state changes.

### Step 5: Setting Up Routing

To set up routing, you can use the router provided by the framework. Here’s a basic example:

```javascript
import { Router } from '../framework/router/router.js';

const router = new Router();

router.addRoute('/', () => {
  render(createElement('h1', null, 'Home Page'), document.getElementById('app'));
});

router.addRoute('/about', () => {
  render(createElement('h1', null, 'About Page'), document.getElementById('app'));
});

// Start the router
router.start();
```

### Conclusion

This basic usage guide provides a starting point for using the Mini Framework. You can create components, manage state, and set up routing to build your applications. For more advanced usage, refer to the advanced usage documentation.