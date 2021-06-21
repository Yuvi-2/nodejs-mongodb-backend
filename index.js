const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require('body-parser')
const app=express()
const PORT=5000
app.use(bodyparser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./Postthingy.js")
const Post=mongoose.model('P')
const MONGOURL="Your mongo databse url"

mongoose.connect(MONGOURL,{
	useUnifiedTopology:true,
	useNewUrlParser:true
})
mongoose.connection.on('connected',()=>{
	console.log("connected to the db")
})
app.listen(PORT,()=>{
	console.log("server started")
})
app.get('/',(req,res)=>{
	res.send("hi ,server is running")
})
app.post('/mpost',(req,res)=>{
	let datee=new Date()
	let dat=datee.getDate()
	let hourss=datee.getHours()
	let minutess=datee.getMinutes()
	let date=JSON.stringify(datee)
	date.slice(0,10)
	let hours=JSON.stringify(hourss)
	let minutes=JSON.stringify(minutess)
	const{title,body}=req.body
	const post=new Post({
		title,
		body,
		date,
		hours,
		minutes
	})


	post.save()
	.then(()=>{
		res.json({message:"post created"})
	})
})
app.get('/viewposts',(req,res)=>{
	Post.find()
	.then(posts=>{
		res.json({posts})
	})
})
