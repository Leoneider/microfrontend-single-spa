import { navigateToUrl } from "single-spa";

class Guard {
  static routePrivate(routes) {
    return function (location) {
      return routes.some((route) => {
        navigateToUrl("/login");
        return location.pathname.startsWith(route) && true;
      });
    };
  }

  static routePublic(routes) {
    return (location) => {
      return routes.some((route) => {
        return location.pathname.startsWith(route);
      });
    };
  }

  static checkAuth(routes) {
    return (location) => {
      navigateToUrl("/login");
      return routes.some((route) => location.pathname === route);
    };
  }

  // This will show the mfe when the path is exact
  static showWhenAnyOf(routes) {
    return (location) => routes.some((route) => location.pathname === route);
  }

  // This will show the mfe when the path starts with
  static showWhenPrefix(routes) {
    return (location) => {
      return routes.some((route) => location.pathname.startsWith(route));
    };
  }

  // This will hide the mfe when path
  static showExcept(routes) {
    return (location) => {
      return routes.every((route) => location.pathname !== route);
    };
  }
}

export default Guard;
