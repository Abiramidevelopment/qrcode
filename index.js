const  express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const qrcode = require('qrcode')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/scan',(req,res)=>{
    let gettingdatafrombrowser =req.body.text;
    qrcode.toDataURL(gettingdatafrombrowser,(err,data)=>{
        res.render('scan',{abi:data})
    })
})


app.listen(10000,()=>{
    console.log("check")
})  