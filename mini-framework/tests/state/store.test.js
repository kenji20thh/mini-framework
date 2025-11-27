import { Store } from '../../framework/state/store';

describe('Store', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    });

    test('should initialize with an empty state', () => {
        expect(store.getState()).toEqual({});
    });

    test('should update state correctly', () => {
        store.setState({ key: 'value' });
        expect(store.getState()).toEqual({ key: 'value' });
    });

    test('should notify subscribers on state change', () => {
        const callback = jest.fn();
        store.subscribe(callback);
        store.setState({ key: 'value' });
        expect(callback).toHaveBeenCalledWith({ key: 'value' });
    });

    test('should allow multiple subscribers', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();
        store.subscribe(callback1);
        store.subscribe(callback2);
        store.setState({ key: 'value' });
        expect(callback1).toHaveBeenCalledWith({ key: 'value' });
        expect(callback2).toHaveBeenCalledWith({ key: 'value' });
    });

    test('should unsubscribe correctly', () => {
        const callback = jest.fn();
        const unsubscribe = store.subscribe(callback);
        unsubscribe();
        store.setState({ key: 'value' });
        expect(callback).not.toHaveBeenCalled();
    });
});