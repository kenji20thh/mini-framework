# Mini Framework

Mini Framework is a lightweight JavaScript framework designed for building web applications with a focus on simplicity and performance. It provides a Virtual DOM implementation, a component-based architecture, state management, routing, and event handling.

## Features

- **Virtual DOM**: Efficiently updates the UI by minimizing direct DOM manipulations.
- **Component System**: Create reusable components with lifecycle methods.
- **State Management**: Centralized store for managing application state with reactivity.
- **Routing**: Simple routing system for navigating between views.
- **Event Handling**: Custom event bus and component-level event emitters for managing events.

## Getting Started

To get started with Mini Framework, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd mini-framework
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:8080` to see the application in action.

## Example Application

The `examples/todo-mvc` directory contains a TodoMVC example application built using Mini Framework. This example demonstrates the framework's capabilities, including component usage, state management, and routing.

## Documentation

Comprehensive documentation is available in the `docs` directory, including:

- [Getting Started Guide](docs/GUIDE.md)
- [API Reference](docs/API.md)
- [Basic Usage Examples](docs/examples/basic-usage.md)
- [Advanced Usage Patterns](docs/examples/advanced-usage.md)

## Testing

To run the tests for the framework, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.