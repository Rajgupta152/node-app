const express = require("express");
const data = require("../model/model");
const router = express.Router();

//creating fetch api
router.post('/dummyData', async (req,resp) => {
    const {name,email,password,age,gender} = req.body;

    const addData = new data({
        name,
        email,
        password,
        age,
        gender
    });

    await addData.save()
          .then((data) => {
            resp.json({message: "data added",data})
          })
          .catch(err => resp.json({message: "something went wrong",err}))
})

module.exports = router;