import { NextRequest,NextResponse } from "next/server";

 const redirectMiddleWare=(request,response)=>{
  //   console.log(request.headers.get('Authorization'))

  //  if(request.headers.get('Authorization')=='Sumit'){

  //   if(request.url==='http://localhost:3001/about'){

  //     return NextResponse.redirect('http://localhost:3001/courses')
  //   }

  //     return NextResponse.next();
  //  }else{
  //      return new Response("You have entered wrong Authorization Key.",{status:401})

  //  }
   
// var response = NextResponse.next();
//   response.headers.set('X-Custom-myname','sumit');
//   response.cookies.set('newLocation','Altudo');
//   console.log(response)
 // return new Response('Currently we are working on this website',{status:500});

}
export default redirectMiddleWare

export const config={
  matcher: ['/((?!api|_next/static|.*\svg|.*\png|.*\jpg|.*\jpeg|.*\gif|.*\webp|_next/image|favicon.ico).*)'],
}

// export const addHeadersMiddleware=()=>{

// var response = NextResponse.next();
//   response.headers.set('X-Custom-myname','sumit');
//   response.cookies.set('newLocation','Altudo');

//   return response

// }

// export const produceCustomResponse=()=>{

//     return new Response("welcome",{status:302})
// }

