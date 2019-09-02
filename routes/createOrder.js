const models = require('../models');
const Order = models.Order;
const OrderItem = models.OrderItem;

function createOrder(req, res, next) {
    // const hmac = req.get('X-Shopify-Hmac-Sha256');
    // const payload = JSON.stringify(req.body);
    // const result = verify(hmac, payload);

    if ('200' != req.get('shopify-webhook-verified')) {
        console.log('invalid signature for uninstall');
        res.sendStatus(403);
        return;
    } else {
        console.log("True!!", req.body);
        res.sendStatus(202);
        const { order_number, email, total_price, name, line_items, phone } = req.body;
        const queryPayload = {
            orderNumber: order_number,
            email,
            cost: total_price,
            mobile: phone,
            name
        };

        Order.create(queryPayload)
            .then(order => {
                let item = {};
                const itemData = line_items.map(orderItem => {
                    item = {
                        orderNumber: order_number,
                        name: orderItem.name,
                        quantity: orderItem.quantity,
                        cost: orderItem.price
                    };
                    return item;
                });
                return OrderItem.bulkCreate(itemData)
            })
            .then(orderItems => {
                console.log("CREATED!!!!");
            })
            .catch(err => console.error(err));



    }
}

module.exports = createOrder;