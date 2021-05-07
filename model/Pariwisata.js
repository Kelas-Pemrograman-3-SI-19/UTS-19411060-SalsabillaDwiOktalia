const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PariwisataSchema = new Schema({
    NamaPariwisata : {
        type :String
    },
    Deskripsi : {
        type : String
    },
    Gambar : {
        type : String
    }
})

module.exports = mongoose.model('Pariwisata', PariwisataSchema)