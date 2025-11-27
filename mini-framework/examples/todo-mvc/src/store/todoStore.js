const todoStore = {
    todos: [],
    subscribers: [],

    addTodo(todo) {
        this.todos.push(todo);
        this.notify();
    },

    removeTodo(index) {
        this.todos.splice(index, 1);
        this.notify();
    },

    getTodos() {
        return this.todos;
    },

    subscribe(callback) {
        this.subscribers.push(callback);
    },

    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    },

    notify() {
        this.subscribers.forEach(callback => callback(this.todos));
    }
};

export default todoStore;