import Sequelize  from 'sequelize';
import { MySQL } from '../database/database';
import {Productos} from './productos.models'
export const preciosDolar = MySQL.define ('Precios_especiales_dolar', {
    id: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        field: 'precios_especiales_dolar_id'
    },
    codigoProducto:{
        type: Sequelize.CHAR,
        primaryKey: true,
        field:'codigo'
    },
    unidadMedida:{
        type: Sequelize.CHAR,
        field:'unidad_medida'
    },
    precioVenta: {
        type: Sequelize.DECIMAL,
        field:'precio_venta'
    },
    precioCompra: {
        type: Sequelize.DECIMAL,
        field:'precio_compra'
    },
    contrato:{
        type: Sequelize.DECIMAL,
        primaryKey: true
    },
    codigoCliente:{
        type: Sequelize.CHAR,
        primaryKey: true,
        field:'codigo_cliente'
    }
}, {
    timestamps: false,
    freezeTableName: true
});

preciosDolar.hasMany(Productos, {foreignKey: 'codigo', as:'Producto'})