import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Pabellon } from './pabellon.models';


export const Seccion_comun = Postgres.define ('seccion_comun', {
    seccion_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'seccion_id',
        allowNull: false,
    },
    pabellon_identificacion:{
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

Pabellon.hasMany(Seccion_comun, {foreignKey: 'pabellon_identificacion'})
Seccion_comun.belongsTo(Pabellon, {foreignKey: 'pabellon_identificacion', targetKey: 'pabellon_id'})

