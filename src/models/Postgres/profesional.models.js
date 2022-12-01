import Sequelize from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Profesional = Postgres.define('profesional', {
    id:{
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'profesional_id',
    },
    fechaIngreso:{
        type: Sequelize.DATE,
        field: 'fecha_ingreso',
    },
    salario:{
        type: Sequelize.FLOAT,
        field: 'salario',
    },
    activo:{
        type: Sequelize.BOOLEAN,
        field: 'activo',
    },
    contrasenaCarnet:{
        type: Sequelize.STRING, 
        field: 'contrasena_carnet',
    },
    numeroHijos:{
        type: Sequelize.INTEGER,
        field: 'numero_hijos',
    },
    numeroColegio:{
        type: Sequelize.INTEGER,
        field: 'numero_colegio',
    },
    sucursal:{
        type: Sequelize.UUID,
        field: 'sucursal_id',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true,
});