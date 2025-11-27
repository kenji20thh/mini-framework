# TodoMVC Example for Mini Framework

This directory contains a TodoMVC example built using the Mini Framework. The application demonstrates the core features of the framework, including component-based architecture, state management, routing, and event handling.

## Project Structure

- **src/**: Contains the source code for the TodoMVC application.
  - **components/**: Contains the React-like components for the application.
    - `TodoApp.js`: The main component that manages the overall application state.
    - `TodoItem.js`: Represents an individual todo item.
    - `TodoList.js`: A container for displaying the list of todos.
    - `TodoHeader.js`: The header component with an input field for adding new todos.
    - `TodoFooter.js`: The footer component that provides filters for the todo list.
  - **store/**: Contains the state management logic.
    - `todoStore.js`: Manages the state of the todo application.
  - **styles/**: Contains the CSS styles for the application.
    - `todomvc.css`: Styles specific to the TodoMVC application.
  - `app.js`: Initializes the TodoMVC application and sets up the rendering.
  - `routes.js`: Configures the routes for the application.

- **index.html**: The entry point HTML file for the TodoMVC example.

## Getting Started

To run the TodoMVC example, follow these steps:

1. Navigate to the `examples/todo-mvc` directory.
2. Run the development server using the following command:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:8080` to view the application.

## Features

- Add, remove, and filter todos.
- Responsive design with a clean user interface.
- Demonstrates the use of the Mini Framework's core features.

## Contributing

Feel free to contribute to this example by submitting issues or pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.