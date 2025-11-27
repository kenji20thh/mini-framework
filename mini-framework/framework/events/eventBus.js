class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    off(event, listener) {
        if (!this.listeners[event]) return;

        this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }

    emit(event, ...args) {
        if (!this.listeners[event]) return;

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }

    // Event delegation method
    delegate(event, selector, listener) {
        const handler = (e) => {
            const target = e.target.closest(selector);
            if (target) {
                listener.call(target, e);
            }
        };
        this.on(event, handler);
    }
}

export default new EventBus();