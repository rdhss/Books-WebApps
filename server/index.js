const express = require('express')
const app = express()
const axios = require('axios')
const {parse, stringify, toJSON, fromJSON} = require('flatted')
const cors = require('cors')
const morgan = require('morgan')



app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(3002, ()=>{
    console.log('server running at port 3002')
})

app.get('/', (req, res) => {
    axios.get('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')
    .then((resp)=>{
        let response = stringify(resp)
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
        res.json({err})
    })
})

app.get('/category1', (req, res) => {
    axios.get('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1')
    .then((resp)=>{
        let response = stringify(resp)
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
        res.json({err})
    })
})