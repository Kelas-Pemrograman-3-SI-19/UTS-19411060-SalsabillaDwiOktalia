const express = require('express')
const app = express()
const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/Pariwisata',{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log('Berhasil Connect ke Database'))
.catch(() => console.log('Gagal Connect ke Database'))

app.use(express.json({
    extended : true,
    limit : '20mb'
}))

app.use(express.urlencoded({
    extended : true,
    limit : '20mb'
}))

// app.get('/', (req, res) => {
//    res.send('Wellcome to Pariwisata Lampung')
// })

// app.get('/profile/:username/:id', (req, res) => {
//     console.log(req.params)
// })

// app.post('/register',(req, res) => {
//     console.log(req.body.username)
// })

app.use('/pariwisata', require ('./routes/Pariwisata'))

app.listen(3000, () => {
    console.log('server started')
})