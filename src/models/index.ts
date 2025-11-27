import User from './User';
import Category from './Category';
import Product from './Product';
import Cart from './Cart';
import Order from './Order';
import OrderItem from './OrderItem';

//associations

Category.hasMany(Product, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Product.hasMany(Cart, { foreignKey: 'productId' });
User.hasMany(Cart, { foreignKey: 'userId' });

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });

OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

export { User, Product, Category, Cart, Order, OrderItem };
