import { connect } from "@/db/db";
import User from "@/model/user-model"
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/mail"


connect().then(()=>{
    console.log("database connected successfully...");
})

export async function POST(req:NextRequest) {
    try {
    const body = await req.json();
    const { username, password } = body;
    const user = await User.findOne({username});
    if(user){
        return NextResponse.json({
            success:false,
            message : "user already exist..."
        },{
            status : 200
        })
    }

    const userData = new User({username,password})
    await userData.save();

    // await sendEmail(username);

    return NextResponse.json({
        success:true,
        message : "created accouont successfully..."
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