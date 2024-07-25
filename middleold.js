import { NextResponse } from 'next/server';
import { initServer } from '@sitecore/engage';

export async function middleware(request) {
  const response = NextResponse.next();

  const engageSettings = {
    clientKey: "pqsmpg99hzkfe1za3socuk3x1d6cvv69",
    targetURL: "https://api-engage-eu.sitecorecloud.io",
    pointOfSale: "CDPLearning",
    cookieDomain: ".localhost",
    cookieExpiryDays: 365,
    forceServerCookieMode: true,
    webPersonalization: true
  };

  const engageServer = initServer(engageSettings);
  await engageServer.handleCookie(request, response);

  return response;
};