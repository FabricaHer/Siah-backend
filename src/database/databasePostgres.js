require('dotenv').config()

import { Sequelize } from 'sequelize'
const database = process.env.POSTGRES_DB_DATABASE
const host = process.env.POSTGRES_DB_HOST
const port = process.env.POSTGRES_DB_PORT
const username = process.env.POSTGRES_DB_USER
const password = process.env.POSTGRES_DB_PASSWORD

export const Postgres = new Sequelize(database,username,password,{
    host: host,
    port: port,
    dialect: 'postgres'

})
