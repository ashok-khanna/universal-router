export type RoutingMatch = {
    match: string;
    arguments: Array<string>;
  }
  
  export type EmptyMatch = {
    match: undefined;
    arguments: []
  };
  
  export type RouteItem = Array<string>;
  export type Routes = Array<RouteItem>;
  
  export function useUniversalRouter(pathname: string, routes: Routes) : RoutingMatch | EmptyMatch {
    for (const [route, value] of routes) {
      if (route === pathname) {
        return {match: value, arguments: []};
      }
  
      const [_, ...locationParts] = pathname.split('/');
      const [__, ...routeParts] = route.split('/');
      if (locationParts.length === routeParts.length) {
        const zipped = locationParts.map((locationPart: string, index: number) =>
                                        ([locationPart, routeParts[index]]))
        for (const [locationPart, routePart] of zipped) {
          if (locationPart === routePart) {
            return {match: value, arguments: locationParts};
          }
        }
      }
    }
    return {
      match: undefined,
      arguments: []
    };
  }
  