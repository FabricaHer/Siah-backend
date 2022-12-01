import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Ubicacion_paciente = Postgres.define ('ubicacion_paciente', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'ubicacion_paciente_id',
        allowNull: false,
    },
    area_atencion:{
        type: Sequelize.UUID,
        field:'area_atencion_id',
    },
    cama:{
        type: Sequelize.UUID,
        field:'cama_id',
    },
    documento:{
        type: Sequelize.UUID,
        field:'documento_id',
    },
    fecha_atencion: {
        type: Sequelize.STRING, // Timestamps?..
        field:'fecha_de_atencion',
    },
    fin_ocupacion: {
        type: Sequelize.STRING, // Timestamps?..
        field:'fin_ocupacion',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});