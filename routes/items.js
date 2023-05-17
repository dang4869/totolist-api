const express = require('express')
const router = express.Router()

const ItemsController = require('../app/controllers/ItemsController')

router.post('/add', ItemsController.add )   
router.get('/:id', ItemsController.showOne )
router.put('/edit/:id', ItemsController.edit )
router.delete('/delete/:id', ItemsController.delete )
router.get('/', ItemsController.index )                                                                                                                                        

module.exports = router