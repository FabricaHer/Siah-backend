require('dotenv').config()

import { Sequelize } from 'sequelize'
const database = process.env.POSTGRES_DBP_DATABASE
const host = process.env.POSTGRES_DBP_HOST
const port = process.env.POSTGRES_DBP_PORT
const username = process.env.POSTGRES_DBP_USER
const password = process.env.POSTGRES_DBP_PASSWORD


export const Postgres = new Sequelize(database,username,password,{
    host: host,
    port: port,
    dialect: 'postgres'

})



