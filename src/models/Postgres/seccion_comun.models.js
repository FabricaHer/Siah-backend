import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Pabellon } from './pabellon.models';
import { Piso } from './piso.models';

export const Seccion_comun = Postgres.define ('seccion_comun', {
    seccion_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'seccion_id',
        allowNull: false,
    },
    pabellon_id3:{
        type: Sequelize.UUID,
        field:'pabellon_id',
    },
    descripcion: {
        type: Sequelize.STRING,
        field:'descripcion',
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

Piso.hasMany(Seccion_comun, {foreignKey: 'seccion_id', as: 'seccion_id'})
Seccion_comun.belongsTo(Piso, {foreignKey: 'seccion_id', targetKey: 'fk_sec_codigo'})

Pabellon.hasMany(Seccion_comun, {foreignKey: 'pabellon_id3', as: 'pabellon_id3'})
Seccion_comun.belongsTo(Pabellon, {foreignKey: 'pabellon_id3', targetKey: 'pabellon_id'})

