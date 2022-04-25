import Sequelize from "sequelize";


export const DPADMWIN = new Sequelize(
    'DPADMWIN',
    'usuarios',
    '',
    {
        host: '192.160.32.12',
        dialect: 'mysql',
        pool:{
            max: 32,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)