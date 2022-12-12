import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Seccion_comun } from './seccion_comun.models';
export const Piso = Postgres.define ('piso', {
    codigo_piso: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'codigo_piso',
        allowNull: false,
    },
    fk_sec_codigo:{
        type: Sequelize.UUID,
        field:'fk_sec_codigo',
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


Seccion_comun.hasMany(Piso, {foreignKey: 'fk_sec_codigo'})
Piso.belongsTo(Seccion_comun, {foreignKey: 'fk_sec_codigo', targetKey: 'seccion_id'})

