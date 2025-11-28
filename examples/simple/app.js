import { createElement, render } from '../../framework/index.js';

// Build a small VDOM tree with nested elements, attributes, and an event handler
const app = createElement('div', { class: 'app', id: 'main-app' }, [
  createElement('h1', { style: 'color: blue; margin-top: 0;' }, ['Hello World']),
  createElement('p', { style: { color: '#555', margin: '0 0 1rem 0' } }, [
    'This content is rendered via a tiny Virtual DOM.'
  ]),
  createElement(
    'button',
    {
      class: 'btn',
      id: 'click-me',
      onclick: () => alert('Clicked!')
    },
    ['Click Me']
  ),
  createElement('div', { style: { marginTop: '1rem' } }, [
    'Inline ',
    createElement('strong', null, ['styles']),
    ' and ',
    createElement('em', null, ['attributes']),
    ' work too.'
  ])
]);

render(app, document.getElementById('root'));
