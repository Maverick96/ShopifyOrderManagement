'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        orderNumber: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {});
    Order.associate = function (models) {
        // associations can be defined here
    };
    return Order;
};
