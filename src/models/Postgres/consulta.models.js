import Sequelize from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Consulta= Postgres.define ('consulta', {
    consulta_id:{
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'consulta_id',
    },
    rol_medico_id:{
        type: Sequelize.UUID,
        field: 'rol_medico_id',
    },
    con_consulta_id:{
        type: Sequelize.UUID,
        field: 'con_consulta_id',
    },
    solicitud_procedimiento_id:{
        type: Sequelize.UUID,
        field:'solicitud_procedimiento_id',
    },
    profesional_id:{
        type: Sequelize.UUID,
        field: 'profesional_id',
    },
    modo_consulta_id:{
        type: Sequelize.UUID,
        field: 'modo_consulta_id',
    },
    ubicacion_paciente_id:{
        type: Sequelize.UUID,
        field: 'ubicacion_paciente_id',
    },
    fecha_atencion:{
        type: Sequelize.TIME,
        field: 'fecha_atencion',
    },
    puede_editar:{
        type: Sequelize.BOOLEAN,
        field: 'puede_editar',
    },
    especialidad_id:{
        type: Sequelize.UUID,
        field: 'especialidad_id',
    },
}, {
schema: 'hce',
timestamps: false,
freezeTableName: true
});