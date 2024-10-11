import { NextResponse } from "next/server"

export const middleware=(request)=>{
    //if anyone hit the path /about he will be redirect to /about/history
    return NextResponse.redirect(new URL('/about/history',request.url))
}

export const config={
    matcher:'/about'
}