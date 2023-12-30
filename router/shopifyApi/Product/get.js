const express = require('express');
const Shopify = require("shopify-api-node");
// const Seller = require("../../../model/model");
const router = express.Router();
// const seller = require("../../../model/model");


router.get('/productget', async (req, res) => {
    try {
        const shopifyData = new Shopify({
            shopName: 'kshitij-test-store.myshopify.com',
            accessToken: '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',
            apiVersion: "2023-01" // Corrected the property name
        });
        
        let productData = await shopifyData.product.list();
        return res.send({ message: 'Products retrieved successfully', products: productData });
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});


// const express = require("express");
// const router = express.Router();
// const Shopify = require("shopify-api-node");
// const Seller = require("../../../model/model");



// router.get("/ProductList", async (req, res) => {
//   try {
  
//     // Find the seller in the database based on the shop value

//       // Create a new instance of the Shopify API client
//       const shopifyClient = new Shopify({
//         shopName:'kshitij-test-store.myshopify.com',
//         accessToken: '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',
//         apiVersion: "2023-01", // Shopify Latest versions
//       });

      
//     //    let params = {};
//     //    let limit = 40; //1000-All Product Get
//     //    params.limit = limit;
       
//       let products = await shopifyClient.product.list();
//       return res.status(200).send({ message: "success", products: products });
//   } catch (error) {
//     return res.send({ status: 'error', massage: 'Something Get Wrong, Please Try Again Latter.', errorMessage : error.message }); 

//   }
// });


module.exports = router;
