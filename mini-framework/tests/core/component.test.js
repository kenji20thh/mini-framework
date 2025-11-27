import { Component } from '../../framework/core/component';

describe('Component', () => {
    let component;

    beforeEach(() => {
        component = new Component();
    });

    test('should initialize with default state and props', () => {
        expect(component.state).toEqual({});
        expect(component.props).toEqual({});
    });

    test('should mount the component', () => {
        const mountSpy = jest.spyOn(component, 'mount');
        component.mount();
        expect(mountSpy).toHaveBeenCalled();
    });

    test('should update the component', () => {
        const updateSpy = jest.spyOn(component, 'update');
        component.update();
        expect(updateSpy).toHaveBeenCalled();
    });

    test('should unmount the component', () => {
        const unmountSpy = jest.spyOn(component, 'unmount');
        component.unmount();
        expect(unmountSpy).toHaveBeenCalled();
    });

    test('should set state correctly', () => {
        component.setState({ key: 'value' });
        expect(component.state).toEqual({ key: 'value' });
    });

    test('should handle props correctly', () => {
        component.setProps({ key: 'value' });
        expect(component.props).toEqual({ key: 'value' });
    });
});