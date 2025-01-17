export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type Routes = (typeof ROUTES)[RouteKeys];
