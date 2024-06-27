const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sem", (req,res) => {
    let data = [req.body.name, req.body.phone, req.body.query];
    console.log(data);

    let name  = req.body.name;
    let txt = "phone = " + req.body.phone + "query = " + req.body.query;

    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth : {
            user : "zombienationxz@gmail.com",
            pass :  "zhve celd qhae cwqr"
        }
    })

    let mailOptions = {
        from : "zombienationxz@gmail.com",
        to : "zombienationxz@gmail.com",
        subject: "Enquiry Form" + name,
        text : txt
    }

    transporter.sendMail(mailOptions,(err,info) => {
        if(err){
            console.log("Mail err", err);
            res.status(500).json(err);
        }
        else {
            console.log("Mail sent");
        }
    })
})
app.listen(9000, () => {console.log("ready @ 9000");});