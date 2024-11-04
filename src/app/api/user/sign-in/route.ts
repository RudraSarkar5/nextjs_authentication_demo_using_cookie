import { connect } from "@/db/db";
import User from "@/model/user-model"
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/mail"
import jwt from "jsonwebtoken"
import { config } from "@/constants/config"


connect().then(()=>{
    console.log("database connected successfully...");
})

export async function POST(req:NextRequest) {
    try {
    const body = await req.json();
    const { username, password } = body;
    const user = await User.findOne({username});
    if(!user){
        return NextResponse.json({
            success:false,
            message : "user not found..."
        },{
            status : 404
        })
    }

    if(user.password != password ){
        return NextResponse.json({
            success:false,
            message : "password not match..."
        },{
            status : 401
        })
    }

    const token = await jwt.sign({user:user.username},config.SECRET_KEY!,{expiresIn:'1d'});

    const response =  NextResponse.json({
        success:true,
        message : "login successfully..."
    },{
        status:200
    })

    response.cookies.set('token',token,{httpOnly:true})

   

    return response;

    } catch (error) {
        return  NextResponse.json({
            success:false,
            message : "server error."
        },{
            status:500
        })
    }
    
}