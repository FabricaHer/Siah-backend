import Sequelize  from 'sequelize';
import { DPADMWIN } from '../database/database';

export const Contratos = DPADMWIN.define("TBCONTRATOS", {
    codigo: {
        type: Sequelize.DECIMAL,
        primaryKey: true,
        field:'CON_CODIGO'
    },
    descripcion: {
        type: Sequelize.CHAR,
        field:'CON_DESCRI'
    },
    comentario: {
        type: Sequelize.CHAR,
        field:'CON_COMENT'
    },
    codigoCliente: {
        type: Sequelize.CHAR,
        field:'CON_CODCLI'
    },
    moneda: {
        type: Sequelize.CHAR,
        field: 'CON_CODMON'
    },
    unido: {
        type: Sequelize.CHAR,
        field:'CON_UNIDO'
    },
    descuento: {
        type: Sequelize.DECIMAL,
        field:'CON_DESCU'
    },
    fechaInicio: {
        type: Sequelize.DATE,
        field:'CON_FINI'
    },
    fechaFinal: {
        type: Sequelize.DATE,
        field:'CON_FFINCO'
    },
    lista: {
        type: Sequelize.CHAR,
        field:'CON_LISTA'
    },
    tipoDocumento: {
        type: Sequelize.CHAR,
        field:'CON_TIPDOC'
    },

}, {
    timestamps: false,
    freezeTableName: true
});