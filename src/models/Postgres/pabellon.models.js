import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Solicitud_area_atencion } from './solici_area_atencion.models';
export const Pabellon = Postgres.define ('pabellon', {
    pabellon_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'pabellon_id',
        allowNull: false,
    },
    sucursal_id:{
        type: Sequelize.UUID,
        field:'sucursal_id',
    },
    area_atencion:{
        type: Sequelize.UUID,
        field:'area_atencion_id',
    },
    descripcion: {
        type: Sequelize.STRING,
        field:'descripcion',
    },
    alias: { 
        type: Sequelize.STRING,
        field:'alias', 
    },
    control_tratamiento: {
        type: Sequelize.BOOLEAN,
        field:'control_tratamiento',
        
    },
    estatus: {
        type: Sequelize.BOOLEAN,
        field:'estatus',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});

Solicitud_area_atencion.hasMany(Pabellon, {foreignKey: 'pabellon_id', as: 'pabellon_id'})
Pabellon.belongsTo(Solicitud_area_atencion, {foreignKey: 'pabellon_id', targetKey: 'pabellon'})