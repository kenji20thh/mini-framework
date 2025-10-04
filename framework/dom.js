/**
 * Creates a real DOM element from a virtual node object
 * @param {Object|string} vnode - Virtual node or text
 * @returns {HTMLElement|Text} DOM element
 */
export function createElement(vnode) {
    // If vnode is just text, return a text node
    if (typeof vnode === "string") {
      return document.createTextNode(vnode);
    }
  
    // 1. Create element based on tag
    const el = document.createElement(vnode.tag);
  
    // 2. Set attributes (if any)
    if (vnode.attrs) {
      for (const [key, value] of Object.entries(vnode.attrs)) {
        el.setAttribute(key, value);
      }
    }
  
    // 3. Attach events (if any)
    if (vnode.events) {
      for (const [event, handler] of Object.entries(vnode.events)) {
        el.addEventListener(event, handler);
      }
    }
  
    // 4. Add children (recursively build DOM)
    if (vnode.children) {
      vnode.children.forEach(child => {
        el.appendChild(createElement(child))
      })
    }
    // 5. Return built element
    return el
  }
  