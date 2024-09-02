import authConfig from "@/auth.config"
import NextAuth from "next-auth"

import {
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOGIN_ROUTE,
  publicRoutes, 
  authRoutes,
  apiAuthPrefix
} from "@/routes";

export const { auth } = NextAuth(authConfig)

export default auth((req: { auth?: any; nextUrl?: any; }) => {
  const {nextUrl} = req;
  const route = nextUrl.pathname;

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = route.startsWith(apiAuthPrefix);
  let isPublicRoute = publicRoutes.includes(route);
  const isAuthRoute = authRoutes.includes(route);

  if (route.startsWith("/product/")){
    isPublicRoute = true;
  }

  if (route.startsWith("/shop/")){
    isPublicRoute = true;
  }

  if (isApiAuthRoute) { 
    return void 0;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return void 0;
  }

  if (!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL(DEFAULT_LOGIN_ROUTE, nextUrl));
  }

  return void 0;

})
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}