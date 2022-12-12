
import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Camas } from './camas.models';
import { Documento } from './documento.models';
export const Ubicacion_paciente = Postgres.define ('ubicacion_paciente', {
    ubicacion_paciente_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'ubicacion_paciente_id',
    },
    area_atencion:{
        type: Sequelize.UUID,
        field:'area_atencion_id',
    },
    cama_id:{
        type: Sequelize.UUID,
        field:'cama_id',
    },
    documento_id:{
        type: Sequelize.UUID,
        field:'documento_id',
    },
    fecha_de_atencion: {
        type: Sequelize.STRING,
        allowNull: false,
        field:'fecha_de_atencion',
    },
    fin_ocupacion: {
        type: "TIMESTAMP",
        field:'fin_ocupacion',
    },
    // fecha_de_atencion: {
    //     type: Sequelize.STRING, // Timestamps?..
    //     field:'fecha_de_atencion',
    // },
    // fin_ocupacion: {
    //     type: Sequelize.STRING, // Timestamps?..
    //     field:'fin_ocupacion',
    // },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});

Camas.hasMany(Ubicacion_paciente, {foreignKey: 'cama_id'})
Ubicacion_paciente.belongsTo(Camas, {foreignKey: 'cama_id', targetKey: 'cam_codigo'})

Documento.hasMany(Ubicacion_paciente, {foreignKey: 'documento_id', as: 'documento'})
Ubicacion_paciente.belongsTo(Documento, {foreignKey: 'documento_id', targetKey: 'documento_id'})

