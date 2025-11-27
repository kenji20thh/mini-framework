import { Router } from '../../framework/router/router';
import { Route } from '../../framework/router/route';

describe('Router', () => {
    let router;

    beforeEach(() => {
        router = new Router();
    });

    test('should initialize with no routes', () => {
        expect(router.routes).toHaveLength(0);
    });

    test('should add a route', () => {
        const route = new Route('/home', () => {});
        router.addRoute(route);
        expect(router.routes).toHaveLength(1);
        expect(router.routes[0]).toBe(route);
    });

    test('should match a route', () => {
        const route = new Route('/about', () => {});
        router.addRoute(route);
        const matchedRoute = router.match('/about');
        expect(matchedRoute).toBe(route);
    });

    test('should return null for unmatched route', () => {
        const matchedRoute = router.match('/non-existent');
        expect(matchedRoute).toBeNull();
    });

    test('should navigate to a route', () => {
        const navigateMock = jest.fn();
        const route = new Route('/contact', navigateMock);
        router.addRoute(route);
        router.navigate('/contact');
        expect(navigateMock).toHaveBeenCalled();
    });

    test('should handle URL changes', () => {
        const route = new Route('/services', () => {});
        router.addRoute(route);
        window.history.pushState({}, '', '/services');
        router.handleUrlChange();
        expect(router.match('/services')).toBe(route);
    });
});