const MongoClient = require('mongodb').MongoClient;

if(process.env.NODE_ENV == "production"){
   module.exports = {mongoURI:"mongodb+srv://bioespacial:jokerlobe17*@cluster0.k9wty.mongodb.net/<dbname>?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI:"mongodb://localhost/bioespacial"}
}
