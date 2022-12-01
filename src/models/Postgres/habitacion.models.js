import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import {Piso} from '../Postgres/piso.models'
export const Habitacion = Postgres.define ('habitacion', {
    habitacion_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'habitacion_id',
        allowNull: false,
    },
    piso_id:{
        type: Sequelize.UUID,
        field:'piso_id',
    },
    descripcion:{
        type: Sequelize.STRING,
        field:'descripcion',
    },
    estatus:{
        type: Sequelize.BOOLEAN,
        field:'estatus',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});

Piso.hasMany(Habitacion, {foreignKey: 'piso_id', as: 'piso_id'})
Habitacion.belongsTo(Piso, {foreignKey: 'piso_id', targetKey: 'codigo_piso'})