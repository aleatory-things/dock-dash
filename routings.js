const router = require('express').Router()
const controllers = require('../controllers/controllers')
const controllerExecute = require('../controllers/controller-execute')

router.get('/', controllers.first)
router.post('/execute/:name', controllerExecute.execute)

module.exports = router
