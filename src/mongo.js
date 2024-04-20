const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })

mongoose.connect('mongodb+srv://shashankkrpandey123:a9yDfOJwsu0euCYt@cluster0.qbhmqbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const songsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const songs=new mongoose.model('songs',songsSchema)
module.exports=songs
