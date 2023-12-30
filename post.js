const express = require("express");
const Seller = require("./model/model");
const router = express.Router();
// const shopifyserver = require('shopify-node-api')


router.post("/ShopifyDatapost", async (req, res) => {
    // console.log(req);
    const data = new Seller({
     ShopName : "kshitij-test-store.myshopify.com",
     accessToken :"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",
   
    })
  
 await data.save()
 .then((data) => res.send(data))
 .catch((err) =>console.log(err))
 
 });
 module.exports=router