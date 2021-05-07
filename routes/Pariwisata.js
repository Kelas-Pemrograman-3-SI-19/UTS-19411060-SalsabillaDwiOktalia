const router = require('express').Router()
const pariwisataController = require('../controller/Pariwisata')

router.post('/insert', (req, res) => {
    pariwisataController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    pariwisataController.getAll(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    pariwisataController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    pariwisataController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    pariwisataController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

module.exports = router