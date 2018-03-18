let database = require('../config/db');

async function sgetData( sname ){
    let db = await database();
    return new Promise((res,rej)=>{
        db.collection("rentals").findOne({name : sname},(err,data) => {
            if (err) {
                rej(err);
                process.exit(1);
            }
            else{
                res(data);
            }
        });
    });
}

module.exports.sgetData=sgetData;