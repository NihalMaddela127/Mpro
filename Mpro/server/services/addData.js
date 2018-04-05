let database = require('../config/db');

async function addData(data){
    let db = await database();
    return new Promise((res, rej) => {
        db.collection("rentals").insertMany(data, function (err, result) {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(result);
            }
        });
    });
}

module.exports.addData=addData;