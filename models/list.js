const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name has not be provided'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters']
    },
    workDone:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('List', listSchema)


