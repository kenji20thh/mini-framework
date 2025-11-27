import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodoHeader } from './components/TodoHeader';
import { TodoFooter } from './components/TodoFooter';

const routes = [
    {
        path: '/',
        component: TodoApp,
        exact: true,
    },
    {
        path: '/todos',
        component: TodoList,
    },
    {
        path: '/add',
        component: TodoHeader,
    },
    {
        path: '/footer',
        component: TodoFooter,
    },
];

export default routes;