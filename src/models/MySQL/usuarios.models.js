import Sequelize  from 'sequelize';
import { MySQL } from '../../database/databaseMySQL';


export const Usuarios = MySQL.define("usuarios_precios", {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field:'codigo_usuario'
    },
    seudonimo: {
        type: Sequelize.CHAR,
        field:'seudonimo'
    },
    contrasena: {
        type: Sequelize.STRING,
        field: 'contrasena'
    },
    cedula: {
        type: Sequelize.CHAR,
        field:'cedula_usuario'
    },
    nombre: {
        type: Sequelize.CHAR,
        field: 'nombre_usuario'
    },
    fecha_creacion: {
        type: Sequelize.DATE,
        field:'fecha_creacion'
    },   
    descripcion: {
        type: Sequelize.CHAR,
        field:'descripcion'
    },
    activo: {
        type: Sequelize.BOOLEAN,
        field:'activo'
    },
}, {
    timestamps: false,
    freezeTableName: true
});