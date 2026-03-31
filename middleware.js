import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // En développement, désactiver le cache pour éviter les problèmes de CSS
  if (process.env.NODE_ENV === 'development') {
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  // Pour les fichiers CSS et JS dans _next/static, permettre le cache mais avec revalidation
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
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
};

