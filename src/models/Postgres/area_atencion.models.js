import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Pabellon } from './pabellon.models';
export const Area_atencion = Postgres.define ('area_atencion', {
    area_atencion_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'area_atencion_id',
        allowNull: false,
    },
    descripcion_area:{
        type: Sequelize.STRING,
        field:'area_atencion',
    },
    enviar_correo_a:{
        type: Sequelize.STRING,
        field:'enviar_correo_a',
    },
    necesita_aprobacion:{
        type: Sequelize.BOOLEAN,  // TimeStamps??
        field:'necesita_aprobacion',
    },
    requiere_cama:{
        type: Sequelize.BOOLEAN,
        field:'requiere_cama',
    },
    subtipo_documento_id:{
        type: Sequelize.UUID,
        field:'subtipo_documento_id',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});


Pabellon.hasMany(Area_atencion, {foreignKey: 'area_atencion_id', as: 'area_atencion_id'})
Area_atencion.belongsTo(Pabellon, {foreignKey: 'area_atencion_id', targetKey: 'area_atencion'})

