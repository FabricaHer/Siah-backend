require('dotenv').config()

import { Sequelize } from 'sequelize'
const pdatabase = process.env.DBP_DATABASE
const phost = process.env.DBP_HOST
const pport = process.env.DBP_PORT
const pusername = process.env.DBP_USER
const ppassword = process.env.DBP_PASSWORD


export const Postgres = new Sequelize(pdatabase,pusername,ppassword,{
    host: phost,
    port: pport,
    dialect: 'postgres'

})



