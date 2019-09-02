const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8000;


// sequelize models
const models = require('./models');

const verifyWebook = require('./utils/verifyWebhook');

// middlewares
try {
    app.use(bodyParser.json({
        verify: verifyWebook
    }));
}
catch (err) {
    console.log("Invalid Request for webhook!");
}

app.use(cors());

app.use(express.static('dist/shopify-order-management-frontend' || ''));
// app.use(function (req, res, next) {
//     res.setHeader(
//         'Access-Control-Allow-Origin', '*'
//     );
//     next();
// })

// route handlers
const createOrder = require('./routes/createOrder');
const listOrder = require('./routes/listOrders');
const editOrder = require('./routes/editOrder');
const orderDetails = require('./routes/getOrderDetails');

//routes  
app.post('/webhooks/create/order', createOrder)
app.get('/order/list', listOrder);
app.post('/order/edit', editOrder)
app.get('/order/:orderNumber', orderDetails)

app.get('*', function (req, res) {
    console.log("SEND FILE!!");
    res.sendFile(__dirname + '/dist/shopify-order-management-frontend/index.html');
});

// Error Handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});


// connect db
models.sequelize.sync().then(function () {
    app.listen(port, () => console.log(`server started at port ${port}`));
});