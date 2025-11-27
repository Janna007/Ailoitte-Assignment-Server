import User from "./User";
import Category from "./Category";
import Product from "./Product";



//associations
Category.hasMany(Product,{foreignKey:"categoryId",onDelete:"CASCADE"})
Product.belongsTo(Category,{foreignKey:"categoryId"})

export {User,Product,Category}
