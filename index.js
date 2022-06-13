const express = require('express')

app = express()

app.get('/',(req,res)=>{
    res.send('I am success')
})


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



app.listen(8000,()=>{
    console.log('Server run success');
})