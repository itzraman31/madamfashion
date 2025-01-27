const mongoose=require('mongoose')

// uri="mongodb://itzraman31:ramandeep37@ac-46umdyx-shard-00-00.2kwpvqt.mongodb.net:27017,ac-46umdyx-shard-00-01.2kwpvqt.mongodb.net:27017,ac-46umdyx-shard-00-02.2kwpvqt.mongodb.net:27017/madamfashion?ssl=true&replicaSet=atlas-10ef87-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const uri=process.env.uri;

const ConnectDB=()=>{
    mongoose.connect(uri);
    console.log("Connect successfuly")
}
module.exports=ConnectDB;