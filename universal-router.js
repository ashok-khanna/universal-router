"use strict";
exports.__esModule = true;
exports.useUniversalRouter = void 0;
function useUniversalRouter(pathname, routes) {
    var _loop_1 = function (route, value) {
        if (route === pathname) {
            return { value: { match: value, arguments: [] } };
        }
        var _b = pathname.split('/'), _ = _b[0], locationParts = _b.slice(1);
        var _c = route.split('/'), __ = _c[0], routeParts = _c.slice(1);
        if (locationParts.length === routeParts.length) {
            var zipped = locationParts.map(function (locationPart, index) {
                return ([locationPart, routeParts[index]]);
            });
            for (var _d = 0, zipped_1 = zipped; _d < zipped_1.length; _d++) {
                var _e = zipped_1[_d], locationPart = _e[0], routePart = _e[1];
                if (locationPart === routePart) {
                    return { value: { match: value, arguments: locationParts } };
                }
            }
        }
    };
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var _a = routes_1[_i], route = _a[0], value = _a[1];
        var state_1 = _loop_1(route, value);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return {
        match: undefined,
        arguments: []
    };
}
exports.useUniversalRouter = useUniversalRouter;
