class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class ReactiveProperty {
    constructor(value) {
        this.value = value;
        this.observable = new Observable();
    }

    get() {
        return this.value;
    }

    set(newValue) {
        this.value = newValue;
        this.observable.notify(this.value);
    }

    subscribe(observer) {
        this.observable.subscribe(observer);
    }

    unsubscribe(observer) {
        this.observable.unsubscribe(observer);
    }
}

export { Observable, ReactiveProperty };