import Sequelize  from 'sequelize';
import { MySQL } from '../../database/databaseMySQL';
import { Clientes } from './clientes.models';


export const Contratos = MySQL.define("TBCONTRATOS", {
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
        field:'CON_CODCLI',
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
        type: Sequelize.DATEONLY,
        field:'CON_FINI'
    },
    fechaFinal: {
        type: Sequelize.DATEONLY,
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
Clientes.hasMany(Contratos, {foreignKey: 'codigoCliente', as: 'cliente_contrato'})
Contratos.belongsTo(Clientes, {foreignKey: 'codigoCliente', targetKey: 'codigo'})
// Clientes.hasMany(Contratos, {
//     foreignKey: 'codigoCliente'
//   });4016445
//   Contratos.belongsTo(Clientes);