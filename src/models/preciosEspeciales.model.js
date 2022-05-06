import Sequelize  from 'sequelize';
import { MySQL } from '../database/database';
export const preciosEspeciales = MySQL.define ('TBPRECIOSESPECIALES', {
    codigoInvetario: {
        type: Sequelize.CHAR,
        primaryKey: true,
        field:'PES_CODINV'
    },
    UnidadMedida:{
        type: Sequelize.CHAR,
        field:'PES_UNDMED'
    },
    precio:{
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
    codigoContrato: {
        type: Sequelize.DECIMAL,
        primaryKey: true,
        field:'PES_CODCON'
    }
}, {
    timestamps: false,
    freezeTableName: true
});
