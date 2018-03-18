let database = require('../config/db');

async function getData( err, res ){
    let db = await database();
    return new Promise((res,rej)=>{
    // db.createCollection('rentals', { strict: true }, function (err) {
        db.collection("rentals").find({}).toArray(function(err, data) {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(data);
            }
        });
    });
    // });
}

module.exports.getData=getData;