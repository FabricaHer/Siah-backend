require('dotenv').config()

import { Sequelize } from 'sequelize'
const database = process.env.DB_DATABASE
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD


export const MySQL = new Sequelize(database,username,password,{
    host: host,
    port: port,
    dialect: 'mysql'

})


