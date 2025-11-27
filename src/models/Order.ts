import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Order extends Model {
    declare id: number;
    declare userId: number;
    declare totalPrice: number;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
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
        modelName: 'Order',
    }
);

export default Order;
