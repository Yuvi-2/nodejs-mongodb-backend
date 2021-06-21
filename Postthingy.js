const mongoose=require('mongoose')
const ptschema=new mongoose.Schema({
title:{
	type:String,
	required:true
},
body:{
	type:String,
	required:true
},
date:{
	type:String,
	required:true
},
hours:{
	type:String,
	required:true
},
minutes:{
	type:String,
	required:true
}

})
module.exports=mongoose.model("P",ptschema)