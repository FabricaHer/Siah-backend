import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Area_atentcion } from './area_atencion.models';
export const Tipo_consulta_area_atencion = Postgres.define('tipo_consulta_area_atencion', {
    tipo_consulta_area_atencion_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'tipo_consulta_area_atencion_id',
        allowNull: false,
    },
    tipo_consulta_id:{
        type: Sequelize.UUID,
        field:'tipo_consulta_id',
        allowNull: false,
    },
    area_atencion_id2:{
        type: Sequelize.UUID,
        field:'area_atencion_id',
        allowNull: false,
    },
}, {
    schema: 'hce',
    timestamps: false,
    freezeTableName: true
});

Area_atentcion.hasMany(Tipo_consulta_area_atencion, {foreignKey: 'area_atencion_id2', as: 'area_atencion_id2'})
Tipo_consulta_area_atencion.belongsTo(Area_atentcion, {foreignKey: 'area_atencion_id2', targetKey: 'area_atencion_id'})

