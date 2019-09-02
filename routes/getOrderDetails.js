const models = require('../models');
const OrderItem = models.OrderItem;

function getDetails(req, res, next) {
    const orderNumber = req.params['orderNumber'];
    console.log("ORDER ", orderNumber);
    OrderItem.findAll({
        where: {
            orderNumber
        }
    })
        .then(orderItems => {
            console.log(orderItems)
            if (orderItems.length) {
                const items = orderItems.map(item => item.dataValues)
                res.json({
                    data: items
                });
            } else {
                res.json({
                    data: []
                })
            }
        })
        .catch(err => {
            console.error(err);
            next(err)
        })
}

module.exports = getDetails;