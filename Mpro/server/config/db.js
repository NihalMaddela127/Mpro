const mongodb=require('mongodb').MongoClient;

module.exports=function db(){
    return new Promise(( res, rej ) => {
        mongodb.connect( "mongodb://127.0.0.1:27017/test", function(err, database) {
            if (err) {
                console.error(err);
                rej(err);
            }
            else {
                console.log("Database connected");
                res(database);
            }
        });
    });
}
