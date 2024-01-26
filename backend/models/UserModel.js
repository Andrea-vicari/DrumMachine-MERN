const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
        username:{
        type: String,
        },
        email:{
        type: String,
        required: true
        }
        ,
        password:{
        type: String,
        required: true
        }

},{ timestamps:true })


module.exports = mongoose.model("UserModel", usersSchema);