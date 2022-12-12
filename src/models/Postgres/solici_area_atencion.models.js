import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Solicitud_area_atencion = Postgres.define ('solicitud_area_atencion', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'solicitud_id',
    },
    area_atencion_solicitada:{
        type: Sequelize.UUID,
        field:'area_atencion_solicitada',
    },
    area_atencion_actual:{
        type: Sequelize.UUID,
        field:'area_atencion_actual',
    },
    admision: {
        type: Sequelize.UUID,
        field:'admision',
    },
    consulta_id:{
        type: Sequelize.UUID,
        field:'consulta_id'
    },
    aprobado_por: {
        type: Sequelize.UUID,
        field:'aprobado_por',
    },
    solicitado_por:{
        type: Sequelize.UUID,
        field:'solicitado_por'
    },
    fecha_solicitud: {
        type: Sequelize.DATE, //Timestamps???..
        field:'fecha_solicitud',
    },
    estado_final: {
        type: Sequelize.INTEGER,
        field:'estado_final',
        
    },
    fecha_respuesta: {
        type: Sequelize.DATE, //Timestamps????...
        field:'fecha_respuesta',
        
    },
    comentario: {
        type: Sequelize.STRING,
        field:'comentario',
        
    },
    pabellon: {
        type: Sequelize.UUID,
        field:'pabellon_id',
        
    },
    medico_tratante: {
        type: Sequelize.UUID,
        field:'medico_tratante',
        
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});