import Sequelize, { DataTypes }  from 'sequelize';
import { DPADMWIN } from '../database/database';

export const Contratos = DPADMWIN.define("TBCONTRATOS", {
    CON_CODIGO: {
        type: Sequelize.DECIMAL,
        primaryKey: true
    },
    CON_DESCRI: {
        type: Sequelize.CHAR
    },
    CON_COMENT: {
        type: Sequelize.CHAR
    },
    CON_CODCLI: {
        type: Sequelize.CHAR
    },
    CON_CODMON: {
        type: Sequelize.CHAR
    },
    CON_UNIDO: {
        type: Sequelize.CHAR
    },
    CON_DESCU: {
        type: Sequelize.DECIMAL
    },
    CON_FINI: {
        type: Sequelize.DATE
    },
    CON_FFINCO: {
        type: Sequelize.DATE
    },
    CON_LISTA: {
        type: Sequelize.CHAR
    },
    CON_TIPDOC: {
        type: Sequelize.CHAR
    },

}, {
    timestamps: false,
    freezeTableName: true
});