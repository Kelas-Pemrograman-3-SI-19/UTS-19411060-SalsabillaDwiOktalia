const pariwisataModel = require('../model/Pariwisata')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    pariwisataModel.create(data)
    .then(() => {
        resolve ({
            status : true,
            pesan : 'Berhasil Input Wisata'
        })
    }).catch (() => reject({
        status : false,
        pesan : 'Gagal Input Wisata'
    }))
})

exports.getAll = () =>
    new Promise((resolve, reject) => {
        pariwisataModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil Menampilkan Data',
                result : result
            })
        }).catch(() => reject({
            status : true, 
            pesan : 'Gagal Mendapatkan Data',
            result : []
        }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        pariwisataModel.findOne({
            _id : objectId(id)
        }).then(result => resolve({
            status : true,
            pesan : 'Berhasil Mendapatkan Data',
            result : result
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Maendapatkan Data',
            result : null
        }))
    })

    exports.update = (id, data) =>
    new Promise((resolve, reject) => {
        pariwisataModel.updateOne({
            _id: objectId(id)
        }, data).then(() => resolve({
            status : true,
            pesan : 'Berhasil Update Data'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Update Data'
        }))
    })

    exports.delete = (id) =>
    new Promise((resolve, reject) => {
        pariwisataModel.deleteOne({
            _id: objectId(id)
        }).then(() => resolve({
            status : true,
            pesan : 'Berhasi Delete Data'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Update Data'
        }))
    })