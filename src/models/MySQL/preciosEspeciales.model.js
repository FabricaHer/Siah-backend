import Sequelize  from 'sequelize';
import { MySQL } from '../../database/databaseMySQL';
export const preciosEspeciales = MySQL.define ('TBPRECIOSESPECIALES', {
    codigoProducto: {
        type: Sequelize.CHAR,
        primaryKey: true,
        field:'PES_CODINV'
    },
    unidadMedida:{
        type: Sequelize.CHAR,
        field:'PES_UNDMED'
    },
    precioVenta:{
        type: Sequelize.DECIMAL,
        field:'PES_PREESP'
    },
    descuento: {
        type: Sequelize.DECIMAL,
        field:'PES_PORDES'
    },
    fechaVencimiento: {
        type: Sequelize.DATE,
        primaryKey: true,
        field:'PES_FVENC'
    },
    contrato: {
        type: Sequelize.DECIMAL,
        primaryKey: true,
        field:'PES_CODCON'
    }
}, {
    timestamps: false,
    freezeTableName: true
});
