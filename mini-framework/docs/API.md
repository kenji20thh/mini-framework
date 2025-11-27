# API Reference

## Overview

This document serves as the API reference for the Mini Framework. It outlines the main components, their methods, and usage examples.

## Core Module

### `createElement(tag, props, ...children)`

Creates a virtual DOM element.

- **Parameters:**
  - `tag` (String): The tag name of the element.
  - `props` (Object): An object containing properties and attributes for the element.
  - `children` (Array): Child elements or text nodes.

- **Returns:** A virtual DOM node.

### `render(vnode, container)`

Renders a virtual DOM node into the specified container.

- **Parameters:**
  - `vnode` (Object): The virtual DOM node to render.
  - `container` (HTMLElement): The DOM element where the virtual node will be rendered.

## Component Class

### `Component`

Base class for creating components.

#### Lifecycle Methods

- `mount()`: Called when the component is mounted.
- `update()`: Called when the component is updated.
- `unmount()`: Called when the component is unmounted.

#### State and Props

- `this.state`: Holds the component's state.
- `this.props`: Holds the component's props.

## Router Module

### `Router`

Handles routing in the application.

#### Methods

- `push(path)`: Navigates to a new route.
- `replace(path)`: Replaces the current route with a new one.
- `onRouteChange(callback)`: Sets a callback to be called on route changes.

## State Management Module

### `Store`

Central state container.

#### Methods

- `getState()`: Returns the current state.
- `setState(newState)`: Updates the state and notifies subscribers.
- `subscribe(callback)`: Subscribes a callback to state changes.

## Observable Module

### `Observable`

Implements the observable pattern.

#### Methods

- `subscribe(observer)`: Adds an observer to be notified on changes.
- `notify()`: Notifies all observers of changes.

## Event Handling Module

### `EventBus`

Global event bus for custom events.

#### Methods

- `emit(event, data)`: Emits an event with optional data.
- `on(event, callback)`: Subscribes a callback to an event.
- `off(event, callback)`: Unsubscribes a callback from an event.

### `EventEmitter`

Component-level event emitter.

#### Methods

- `emit(event, data)`: Emits an event.
- `on(event, callback)`: Subscribes to an event.
- `off(event, callback)`: Unsubscribes from an event.

## Example Usage

```javascript
import { createElement, render } from 'mini-framework/core';
import { Component } from 'mini-framework/core/component';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return createElement('div', null, 
      createElement('h1', null, `Count: ${this.state.count}`),
      createElement('button', { onClick: () => this.increment() }, 'Increment')
    );
  }
}

const app = createElement(MyComponent);
render(app, document.getElementById('app'));
```

This document provides a high-level overview of the API. For detailed examples and advanced usage, refer to the [GUIDE.md](GUIDE.md) and [examples](examples/) sections.