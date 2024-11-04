
import { NextRequest, NextResponse } from "next/server";





export async function GET(req:NextRequest) {
    try {
    
    
    return  NextResponse.json({
        success:true,
        message : "fetched  profile ..",
        data :"rudra"
    },{
        status:200
    })

    } catch (error) {
        return  NextResponse.json({
            success:false,
            message : "server error."
        },{
            status:500
        })
    }
    
}