function diff(oldVNode, newVNode) {
    // If the old and new virtual nodes are the same, return null
    if (oldVNode === newVNode) {
        return null;
    }

    // If the old virtual node is null, return the new virtual node
    if (oldVNode == null) {
        return newVNode;
    }

    // If the new virtual node is null, return an empty node
    if (newVNode == null) {
        return null;
    }

    // If the type of the nodes is different, replace the old node with the new one
    if (oldVNode.type !== newVNode.type) {
        return newVNode;
    }

    // If the node is a text node, check for changes
    if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
        if (oldVNode !== newVNode) {
            return newVNode;
        }
        return null;
    }

    // Create a patch object to hold changes
    const patches = {};

    // Check for changes in props
    const oldProps = oldVNode.props || {};
    const newProps = newVNode.props || {};

    // Compare old and new props
    for (const key in newProps) {
        if (oldProps[key] !== newProps[key]) {
            patches[key] = newProps[key];
        }
    }

    // Check for removed props
    for (const key in oldProps) {
        if (!(key in newProps)) {
            patches[key] = null;
        }
    }

    // If there are changes, return the new virtual node with patches
    if (Object.keys(patches).length > 0) {
        return {
            ...newVNode,
            props: {
                ...newProps,
                ...patches,
            },
        };
    }

    // If no changes, return null
    return null;
}

function patch(domNode, patches) {
    if (patches === null) {
        return;
    }

    // Update the DOM node with new properties
    for (const key in patches.props) {
        if (patches.props[key] === null) {
            domNode.removeAttribute(key);
        } else {
            domNode.setAttribute(key, patches.props[key]);
        }
    }

    // Handle children updates
    const oldChildren = domNode.childNodes;
    const newChildren = patches.children || [];

    // Update children based on the patches
    for (let i = 0; i < Math.max(oldChildren.length, newChildren.length); i++) {
        if (i < newChildren.length) {
            if (i < oldChildren.length) {
                const childPatch = diff(oldChildren[i], newChildren[i]);
                if (childPatch) {
                    patch(oldChildren[i], childPatch);
                }
            } else {
                domNode.appendChild(createElement(newChildren[i]));
            }
        } else if (i < oldChildren.length) {
            domNode.removeChild(oldChildren[i]);
        }
    }
}

export { diff, patch };