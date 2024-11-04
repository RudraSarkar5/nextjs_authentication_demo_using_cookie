import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "54bdc8cb104402",
    pass: "156caa7363f876"
  }
});

export const sendEmail = async (email:string)=>{

  try {

      const info = await transport.sendMail({
      from: 'rudra@gmail.com', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "got signup successfully....", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

  } catch (error) {
    
  }
  

}


