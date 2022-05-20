import Sequelize  from 'sequelize';
import { MySQL } from '../../database/databaseMySQL';

export const PrecioTip = MySQL.define ('DPPRECIOTIP', {
    TPP_CODIGO:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    TPP_DESCRI:{
        type: Sequelize.STRING
    },
    TPP_MEMO:{
        type: Sequelize.TEXT
    },
    TPP_INCIVA:{
        type: Sequelize.TINYINT
    },
    TPP_PORUTI:{
        type: Sequelize.DECIMAL
    },
    TPP_FORMUL:{
        type: Sequelize.STRING
    },
    TPP_MONEDA: {
        type: Sequelize.CHAR
    },
    TPP_PORUTM:{
        type: Sequelize.DECIMAL
    },
    TPP_PORHEM:{
        type: Sequelize.DECIMAL
    },
    TPP_ESTADO:{
        type: Sequelize.TINYINT
    },
    TPP_FECHA:{
        type: Sequelize.DATE
    }

}, {
    timestamps: false
});