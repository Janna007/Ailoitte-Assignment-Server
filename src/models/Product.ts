import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Product extends Model {
    declare id: number;
    declare name: string;
    declare description?: string;
    declare price: number;
    declare stock: number;
    declare imageUrl: string;
    declare categoryId: number;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize,

        timestamps: true,

        // createdAt: true,

        // updatedAt: 'updateTimestamp',
        modelName: 'Product',
    }
);

export default Product;
