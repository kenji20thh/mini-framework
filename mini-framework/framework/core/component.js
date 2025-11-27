class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};
        this.isMounted = false;
    }

    mount() {
        this.isMounted = true;
        this.componentDidMount();
    }

    update(newProps) {
        this.props = newProps || this.props;
        this.componentDidUpdate();
    }

    unmount() {
        this.isMounted = false;
        this.componentWillUnmount();
    }

    componentDidMount() {
        // Lifecycle method to be overridden
    }

    componentDidUpdate() {
        // Lifecycle method to be overridden
    }

    componentWillUnmount() {
        // Lifecycle method to be overridden
    }
}