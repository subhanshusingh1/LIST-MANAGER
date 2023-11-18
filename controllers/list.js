const List = require('../models/list')

const getAllList = async (req, res) => {
    try {
        const task = await List.find({})
        res.status(200).json({task})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const getSingleList = async (req, res) => {
    try {
        const {id:listID} = req.params
        const task = await List.findById({_id:listID})
        if(!task) {
            return res.status(404).json({msg:`no list is available for give id: ${listID}`})
        }
        res.status(200).json({task})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const createList =  async (req, res) => {
    try {
        const task = await List.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const updateList = async (req, res) => {
    try {
        const {id:listID} = req.params
        const task = await List.findByIdAndUpdate({_id:listID}, req.body , {
            new:true,
            runValidators:true
        })
        res.status(200).json({task})

    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const deleteList =  async (req, res) => {
    try {
        const {id:listID} = req.params
        const task = await List.findByIdAndDelete({_id:listID})
        if(!task) {
            return res.status(404).json({msg:`no list available for given id: ${listID}`})
        }
        res.status(200).json({task})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllList,
    getSingleList,
    createList,
    updateList,
    deleteList
}