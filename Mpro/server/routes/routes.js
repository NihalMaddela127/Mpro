const express = require('express');
const router = express.Router();
const sgetService = require('../services/getsData');
const getService = require('../services/getData');
const addService = require('../services/addData');
// const deleteService = require('../services/deletedata');
// const updateService = require('../services/updatedata');

router.get('/rentals', async function (req, res, next) {
    try{
        let data = await getService.getData();
        res.json(data);
        console.log(data);
    }
    catch(err){
        next(err);
    }
});

router.get('/rentals/:name', async function (req, res, next) {
    let name = req.params.name;
    try{
        let data = await sgetService.sgetData(name);
        res.json(data);
    }
    catch(err){
        next(err);
    }
});

router.post('/storeRentals', async function (req, res, next) {
    let newData = req.body;
    try{
        let data = await addService.addData(newData);
        res.json(data);
    }
    catch(err){
        next(err);
    }
});

// router.put('/users/:name', async function(req, res, next){
//     let user = req.params.name;
//     let newUser = req.body;
//     try{
//         let data = await updateService.updateUsers(user, newUser);
//         res.json(data);

//     }
//     catch(err){
//         next(err);
//     }
// })

// router.delete('/users/:name', async function (req, res, next) {
//     let newData = req.params.name;
//     try{
//         let data = await deleteService.deleteData(newData);
//         res.json(data);
//     }
//     catch(err){
//         next(err);
//     }
// });

router.use('error',function(err, req, res, next){
    if(err){
        console.error(err);
    }
});

module.exports = router;
