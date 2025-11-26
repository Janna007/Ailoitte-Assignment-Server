import { Config } from './config';
import logger from './config/logger';
import app from './app';
import { sequelize } from './config/db';

const PORT = Config.PORT;

const startServer = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            // console.log(`server is running on ${Config.PORT}`);
            logger.info('ecommerce server is running', { PORT });
        });
    } catch(error) {
        console.log(error)
        logger.error('error while running server', { PORT });
        process.exit(1);
    }
};

startServer();
