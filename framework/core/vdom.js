// Minimal Virtual DOM implementation
// Exports: createElement, render, mount

// Create a virtual DOM node descriptor
// tag: string (e.g., 'div')
// attrs: object of attributes and event handlers
// children: array of strings/numbers (text) or other virtual nodes
export function createElement(tag, attrs = {}, children = []) {
  // Normalize children: allow single child or null
  const normalizedChildren = Array.isArray(children) ? children : [children];
  return { tag, attrs, children: normalizedChildren };
}

// Internal: apply attributes and event handlers to a real DOM element
function setAttributes(el, attrs = {}) {
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null || value === false) continue; // skip null/undefined/false

    // Events: onClick, oninput, etc.
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, value);
      continue;
    }

    // Class handling
    if (key === 'class' || key === 'className') {
      el.setAttribute('class', String(value));
      continue;
    }

    // Label 'for' compatibility
    if (key === 'for' || key === 'htmlFor') {
      el.setAttribute('for', String(value));
      continue;
    }

    // Style: string or object
    if (key === 'style') {
      if (typeof value === 'string') {
        el.style.cssText = value;
      } else if (value && typeof value === 'object') {
        for (const styleName in value) {
          // @ts-ignore - allow index access to style
          el.style[styleName] = value[styleName];
        }
      }
      continue;
    }

    // Default: set as attribute
    el.setAttribute(key, String(value));
  }
}

// Internal: convert a virtual node to a real DOM node
function createDomNode(vnode) {
  // Text node
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }
  if (vnode == null || vnode === true || vnode === false) {
    return document.createTextNode('');
  }

  const { tag, attrs, children } = vnode;
  const el = document.createElement(tag);
  setAttributes(el, attrs);

  // Append children recursively
  if (Array.isArray(children)) {
    for (let child of children) {
      // Support nested arrays (rare but convenient)
      if (Array.isArray(child)) {
        for (let nested of child) {
          el.appendChild(createDomNode(nested));
        }
      } else {
        el.appendChild(createDomNode(child));
      }
    }
  }

  return el;
}

// Mount helper: clear container and append element
export function mount(element, container) {
  if (!container) throw new Error('mount: container is required');
  // Clear previous contents for a simple replace semantics
  container.innerHTML = '';
  container.appendChild(element);
}

// Render: build a real DOM subtree from a virtual node and mount it
export function render(vnode, container) {
  const element = createDomNode(vnode);
  mount(element, container);
  return element;
}
