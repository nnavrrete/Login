const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserSchema = new Schema({
name:{ 
  type:String
 },
password:{
  type:int
},
email:{
  type:String,
   unique:true
  },
role: {
  type:["user","admin"],
   default:"user"
},
},{
  timestamps:true,
  versionKey: false
})

module.exports = mongoose.model("Users", UserSchema)