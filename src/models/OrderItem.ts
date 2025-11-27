import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class OrderItem extends Model {
    declare id: number;
    declare orderId: number;
    declare productId: number;
    declare quantity: number;
    declare price: number;
}

OrderItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize,

        timestamps: true,

        // createdAt: true,

        // updatedAt: 'updateTimestamp',
        modelName: 'OrderItem',
    }
);

export default OrderItem;
