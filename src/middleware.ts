import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.has("test")) {
    console.log("middleware: delete test");
    response.cookies.delete("test");
  } else {
    const value = crypto.randomUUID();
    console.log("middleware: create test", value);
    response.cookies.set({
      name: "test",
      value: value,
      maxAge: 30,
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}