class Router {
    constructor() {
        this.routes = [];
        this.currentRoute = null;
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => {
            this.handleRouteChange(location.pathname);
        });
    }

    addRoute(path, component) {
        this.routes.push({ path, component });
    }

    navigate(path) {
        history.pushState({}, '', path);
        this.handleRouteChange(path);
    }

    handleRouteChange(path) {
        const route = this.routes.find(route => route.path === path);
        if (route) {
            this.currentRoute = route.component;
            this.render();
        }
    }

    render() {
        const appElement = document.getElementById('app');
        appElement.innerHTML = '';
        if (this.currentRoute) {
            appElement.appendChild(this.currentRoute());
        }
    }
}

export default Router;