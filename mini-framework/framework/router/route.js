class Route {
    constructor(path, component) {
        this.path = path;
        this.component = component;
    }

    match(url) {
        const regex = this.pathToRegex(this.path);
        const result = regex.exec(url);
        return result ? this.extractParams(result) : null;
    }

    pathToRegex(path) {
        const regexPath = path.replace(/:\w+/g, '([^/]+)').replace(/\//g, '\\/');
        return new RegExp(`^${regexPath}$`);
    }

    extractParams(result) {
        const params = {};
        const keys = this.path.match(/:\w+/g) || [];
        keys.forEach((key, index) => {
            params[key.substring(1)] = result[index + 1];
        });
        return params;
    }
}

export default Route;