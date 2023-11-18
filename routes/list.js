const express = require('express')
const router = express.Router()
const {
    getAllList,
    getSingleList,
    createList,
    deleteList,
    updateList
} = require('../controllers/list')


router.get('/', getAllList)

router.get('/:id', getSingleList)

router.post('/', createList)

router.patch('/:id', updateList)

router.delete('/:id', deleteList)

module.exports = router
