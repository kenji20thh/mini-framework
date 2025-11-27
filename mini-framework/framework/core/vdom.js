class VNode {
    constructor(tag, props = {}, children = []) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
}

function createElement(tag, props, ...children) {
    return new VNode(tag, props, children);
}

function render(vnode, container) {
    if (typeof vnode === 'string') {
        container.appendChild(document.createTextNode(vnode));
        return;
    }

    const element = document.createElement(vnode.tag);

    for (const [key, value] of Object.entries(vnode.props)) {
        element.setAttribute(key, value);
    }

    vnode.children.forEach(child => render(child, element));

    container.appendChild(element);
}

export { createElement, render };