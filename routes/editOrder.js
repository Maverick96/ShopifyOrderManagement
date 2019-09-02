const models = require('../models');
const Order = models.Order;
const editableItems = ['mobile', 'email'];

function editOrder(req, res, next) {
    const queryPayload = {};
    const orderNumber = req.body.orderNumber;
    // check if order number was present in request
    if (orderNumber) {
        editableItems.map(item => {
            if (req.body.hasOwnProperty(item)) {
                queryPayload[item] = req.body[item];
            }
        })
        // check if edit fields are present
        if (Object.keys(queryPayload).length) {
            Order.update(
                queryPayload, {
                    where: {
                        orderNumber
                    }
                }
            )
                .then(orderItem => {
                    console.log("ORDER Edit", orderItem)
                    // if edit was successful
                    if (orderItem[0]) {
                        res.json({
                            success: true
                        });
                    } else {
                        next(new Error("Order number not found"))
                    }
                })
                .catch(err => {
                    console.log(err);
                    next(err);
                })
        } else {
            next(new Error("Incorrect fields for edit"))
        }
    } else {
        next(new Error("Order number not was sent"))
    }



}


module.exports = editOrder;