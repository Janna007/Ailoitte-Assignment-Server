import { Config } from ".";
import {Sequelize} from 'sequelize'

let database=Config.DB_NAME || ''
let username=Config.DB_USERNAME || ''
let password=Config.DB_PASSWORD
let host=Config.DB_HOST || 'localhost'

export const sequelize=new Sequelize(database,username,password,{
    host:host,
    dialect:'postgres',
    logging: false
})


