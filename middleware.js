import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  if (!request.cookies.get('language')) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const primaryLang = acceptLanguage.split(',')[0].trim().split('-')[0].toLowerCase();
    const isSpanish = primaryLang === 'es';
    response.cookies.set('language', isSpanish ? 'es' : 'en', {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      path: '/',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicons).*)'],
};
