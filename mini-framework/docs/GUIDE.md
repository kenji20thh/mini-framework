# Getting Started with Mini Framework

Welcome to the Mini Framework! This guide will help you set up and start using the framework for your projects.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or higher)
- npm (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mini-framework.git
   cd mini-framework
   ```

2. **Install dependencies:**

   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

## Project Structure

The Mini Framework has a well-defined structure. Here’s a brief overview:

```
mini-framework/
├── framework/          # Core framework files
├── examples/           # Example applications
├── docs/               # Documentation
├── tests/              # Test files
├── package.json        # Project metadata
└── README.md           # Project overview
```

## Creating Your First Application

To create a new application using the Mini Framework, follow these steps:

1. **Create a new directory for your app:**

   ```bash
   mkdir my-app
   cd my-app
   ```

2. **Initialize a new project:**

   You can copy the structure from the `examples/todo-mvc` directory or create your own components.

3. **Set up your main application file:**

   Create an `app.js` file and initialize your application:

   ```javascript
   import { createElement, render } from '../framework/core/index.js';
   import App from './components/App.js';

   const root = document.getElementById('app');
   render(createElement(App), root);
   ```

4. **Define your components:**

   Create components in the `components` directory. For example, create `App.js`:

   ```javascript
   import { Component } from '../../framework/core/component.js';

   class App extends Component {
       render() {
           return createElement('div', null, 'Hello, Mini Framework!');
       }
   }

   export default App;
   ```

5. **Run your application:**

   Use the following command to start the development server:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:8080` to see your application in action.

## Additional Resources

- **API Reference:** Check the `API.md` file for detailed information on the framework's API.
- **Examples:** Explore the `docs/examples` directory for basic and advanced usage examples.
- **Testing:** Use the `tests` directory to run tests and ensure your application works as expected.

## Conclusion

You are now ready to start building applications with the Mini Framework! For any questions or issues, feel free to check the documentation or reach out to the community. Happy coding!