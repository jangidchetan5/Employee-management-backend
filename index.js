const mongoose = require('mongoose');
const express = require('express');
const employeeDataModel = require('./models/user.js');
const app = express();
const PORT = process.env.PORT || 3500;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
const jwt = require("jsonwebtoken");

//db connection

const db = "mongodb+srv://chetanjangid2:12345che@cluster0.cjplv.mongodb.net/employeemgmtdb?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected To MongoDb')
}).catch((e) => { console.log('Error --> ' + e) })


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Unauthorized Request")
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send("Unauthorized Request")
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send("Unauthorized Request")

    }
    req.userId = payload.subject;
    next();

}



app.post('/employeeregistration', async (req, res) => {
    try {
        const  employeeDataModel1= new employeeDataModel();


        employeeDataModel1.firstname = req.body.firstname;
        employeeDataModel1.lastname = req.body.lastname;
        employeeDataModel1.mobilenumber = req.body.mobilenumber;
        employeeDataModel1.emailaddress = req.body.emailaddress;
        employeeDataModel1.password = req.body.password;
        employeeDataModel1.confirmpassword = req.body.confirmpassword;
        // await employeeDataModel1.save();
        await employeeDataModel1.save((error,registeredEmployee)=>{
            if(error){
                console.log(error)
            }else{
                let payload = { subject: registeredEmployee._id }
                let token = jwt.sign(payload, "secretKey");
                res.status(200).send({ token });
            }
        });

        // res.status(200).send("You have successfully submitted your information");
    } catch (e) {
        res.status(500)

    }

})

app.post('/login',(req,res)=>{
    let employeeData = req.body;
    employeeDataModel.findOne({ emailaddress: employeeData.emailaddress }, (error, user) => {
        if (error) {
            console.log(error);

        } else {
            if (!user) {
                res.status(401).send("Invalid Email")
            }
            else if (user.password !==  employeeData.password) {
                res.status(401).send("Invalid Password")
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, "secretKey");
                res.status(200).send({ token })
                // res.status(200).send('successfully loggedin')
            }
        }

    })

})

app.get('/sidenav1',verifyToken,(req,res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23"
        },
    ]
    res.json(events);
})

app.listen(PORT,()=>{
    console.log(`server listening on PORT ${PORT}`);
})
