import createHttpError from "http-errors";
import {Category, Product} from "../models";
import { ProductInput } from "../types";

export class ProductService{
    async create( {name, description, price, stock, categoryId,imageUrl}:ProductInput){
        try {
            return await Product.create({
                name,
                description,
                price,
                stock,
                categoryId,
                imageUrl
            });
        } catch (err){
            console.log(err)
            const error = createHttpError(500, 'Error while saving data to the database');
            throw error;
        }
    }

    async getList(query:any,pageLimit:number,offset:number) {
        try {
            return await Product.findAndCountAll({
                where:query,
                limit:pageLimit,
                offset,
                include:[
                    {
                        model:Category,
                        attributes: ["id", "name", "description"],
                    }
                ],
                order: [["createdAt", "DESC"]],
            });
        } catch (err) {
            console.error('product listing error:', err);
            const error = createHttpError(500, 'Error while listing  products');
            throw error;
        }
    }
}