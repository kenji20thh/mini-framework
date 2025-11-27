import { createElement, render } from '../../framework/core/index';
import { diff } from '../../framework/core/diff';

describe('Virtual DOM', () => {
    test('should create a virtual DOM node', () => {
        const vNode = createElement('div', { id: 'test' }, 'Hello World');
        expect(vNode).toEqual({
            tag: 'div',
            props: { id: 'test' },
            children: ['Hello World'],
        });
    });

    test('should render a virtual DOM node to the actual DOM', () => {
        const container = document.createElement('div');
        const vNode = createElement('div', { id: 'test' }, 'Hello World');
        render(vNode, container);
        expect(container.innerHTML).toBe('<div id="test">Hello World</div>');
    });

    test('should diff two virtual DOM trees', () => {
        const oldVNode = createElement('div', { id: 'test' }, 'Hello');
        const newVNode = createElement('div', { id: 'test' }, 'World');
        const patches = diff(oldVNode, newVNode);
        expect(patches).toEqual([
            { type: 'TEXT', content: 'World' },
        ]);
    });
});