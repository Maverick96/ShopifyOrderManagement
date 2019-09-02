'use strict';

module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        orderItemId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'orderNumber'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {});
    OrderItem.associate = function (models) {
        // associations can be defined here
        const Orders = models.Order;
        Orders.hasMany(OrderItem, { foreignKey: 'orderNumber', sourceKey: 'orderNumber' });

    };
    return OrderItem;
};
