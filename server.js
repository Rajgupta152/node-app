const express = require('express');
const cors = require('cors');
// require("./config/database").connect();
const postApi = require("./router/post")
const fetchApi = require("./router/fetch");
const shopifyPostApi = require('./post');
const shopifyGetApi = require('./router/shopifyApi/Product/get')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,resp) => {
    resp.send('Welcome');
})

//api call
app.use('/api',postApi);
app.use('/api',fetchApi);
app.use('/api',shopifyPostApi);
app.use('/api',shopifyGetApi);



const port = process.env.port || 8001;

app.listen(port, () => {
    console.log('Server is running on port', port);
})