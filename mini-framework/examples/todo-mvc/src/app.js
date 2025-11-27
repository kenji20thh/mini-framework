import { createElement, render } from '../../framework/core/index';
import TodoApp from './components/TodoApp';
import './styles/todomvc.css';

const appElement = createElement(TodoApp);
const rootElement = document.getElementById('app');

render(appElement, rootElement);