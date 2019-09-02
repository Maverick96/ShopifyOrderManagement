const models = require('../models');
const Order = models.Order;

function getOrderList(req, res, next) {
    let sort = req.query.sortby ? req.query.sortby : 'orderNumber';
    const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    sort = sort.toString();
    let sortType = 'ASC'
    if (sort[0] == '-') {
        sortType = 'DESC'
        sort = sort.replace('-', '');
    }

    Order.findAndCountAll({
        offset,
        limit,
        order: [[sort, sortType]]
    }).then(result => {
        console.log(result)
        res.json({
            data: result.rows,
            total: result.count
        })
    })
        .catch(err => {
            res.send("Fail");
            console.error(err);
        })


}


module.exports = getOrderList;