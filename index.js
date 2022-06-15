const express = require('express')
// const bodyparser = require('body-parser')
const multer =require('multer')


let app = express()
const multer=multer()
// app.use(bodyparser.json())
app.use(multer.array())
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send('I am success')
})

app.post('/Thirteen',(req,res)=>{
    let JSONData = req.body
    res.send(JSON.stringify(JSONData))
})

// app.post('/eleven',(req,res)=>{
//     let JSONData =req.body
//     let JSONString = JSON.stringify(JSONData)
//     res.send(JSONString)
// })

// app.post('/twelve',(req,res)=>{
//     let JSONData =req.body
//     let name = JSONData
//     ['name']
//     let city = JSONData['city']
//     res.send(name + " " +city)
// })

app.post('/about',(req,res)=>{
    res.send('I am About route')
})

app.put('/contact',(req,res)=>{
    res.send('I am contact route')
})

app.delete('/terms',(req,res)=>{
    res.send('I am Terms route')
})

app.get('/four',(req,res)=>{
    res.download('./upload/2.jpg')
})

app.get('/five',(req,res)=>{
    
    res.append('name','Hridoy')
    res.append('city','Dhaka')
    res.append('age','21 years')
    res.status(403).end('Hello World')
})

app.get('/six',(req,res)=>{
    
    res.cookie('name','Hridoy')
    res.cookie('city','Dhaka')
    res.cookie('age','21 years')
    res.end('Cookie set success')
})

app.get('/seven',(req,res)=>{
    res.clearCookie('name')
    res.end('Cookie clear success')
})

app.get('/eight',(req,res)=>{
   let firstname = req.query.firstname
   let lastname = req.query.lastname
    res.end(firstname+" "+lastname)
})

app.get('/nine',(req,res)=>{
    let firstname = req.header('firstname')
    let lastname = req.header('lastname')
     res.end(firstname+" "+lastname)
 })

 app.post('/ten',(req,res)=>{
    let firstname = req.query.firstname
    let lastname = req.query.lastname
     res.end(firstname+" "+lastname)
 })


app.post('/two',(req,res)=>{
    res.status(401).end('unathor...')
})

app.get('/three',(req,res)=>{
    let myJSONArray=[
        {
            name:'Ridoy hasan',
            city:'Dhaka',
            occupation:'porasuna'
        },

        {
            name:'Ridoy hasan',
            city:'Domar',
            occupation:'porachuri'
        },

        {
            name:'Ridoy hasan',
            city:'Dhamrai',
            occupation:'poralekha'
        }
    ]
    res.json(myJSONArray)
})



app.listen(8040,()=>{
    console.log('Server run success');
})