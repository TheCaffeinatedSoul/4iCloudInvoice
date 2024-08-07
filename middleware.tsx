import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const currentUser = request.cookies.get("currentuser")?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/home")) {
    return Response.redirect(new URL("/home", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
