require('dotenv').config()

import { Sequelize } from 'sequelize'
const database = process.env.MYSQL_DB_DATABASE
const host = process.env.MYSQL_DB_HOST
const port = process.env.MYSQL_DB_PORT
const username = process.env.MYSQL_DB_USER
const password = process.env.MYSQL_DB_PASSWORD


export const MySQL = new Sequelize(database,username,password,{
    host: host,
    port: port,
    dialect: 'mysql'

})


