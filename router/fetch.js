const express = require("express");
const data = require("../model/model");
const router = express.Router();

//fecth api
router.get('/dummyData', async(req,resp) =>{
    const result = await data.find({});
    resp.send(result);
})

module.exports = router;