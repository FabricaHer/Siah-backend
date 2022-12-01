import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Habitacion } from './habitacion.models';
export const Camas = Postgres.define ('camas', {
    cam_codigo: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'cam_codigo',
        allowNull: false,
    },
    habitacion_id2:{
        type: Sequelize.UUID,
        field:'habitacion_id',
    },
    descripcion:{
        type: Sequelize.STRING,
        field:'descripcion',
    },
    estatus: {
        type: Sequelize.BOOLEAN,
        field:'estatus',
    },
    emergencia: {
        type: Sequelize.BOOLEAN,
        field:'emergencia', 
    },
    ocdistribtto: {
        type: Sequelize.STRING,
        field:'ocdistribtto',
        
    },
    codigo_siah: {
        type: Sequelize.STRING,
        field:'codigo_siah',
    },
    es_virtual: {
        type: Sequelize.BOOLEAN,
        field:'es_virtual',
        
    },
    procedimiento: {
        type: Sequelize.BOOLEAN,
        field:'procedimiento',
        
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});

Habitacion.hasMany(Camas, {foreignKey: 'habitacion_id2', as: 'habitacion_id2'})
Camas.belongsTo(Habitacion, {foreignKey: 'habitacion_id2', targetKey: 'habitacion_id'})