import { connect } from "@/db/db";
import User from "@/model/user-model"
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/mail"
import jwt from "jsonwebtoken"
import { config } from "@/constants/config"
import { cookies } from "next/headers";


connect().then(()=>{
    console.log("database connected successfully...");
})

export async function GET(req:NextRequest) {
    try {
    
        const cookieStore = await cookies();
        const token =  cookieStore.get('token')?.value;
        console.log("token is :",token);
       const data = await jwt.verify(token!,config.SECRET_KEY!);

       console.log("data is :",data);

       
    
    

    return  NextResponse.json({
        success:true,
        message : "fetched  profile ..",
        data 
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