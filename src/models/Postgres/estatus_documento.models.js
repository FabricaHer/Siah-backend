import Sequelize from 'sequelize';
import { Postgres } from '../../database/databasePostgres';

export const Estatus_documento = Postgres.define ('consulta', {
    estatus_documentos_id:{
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'estatus_documentos_id',
    },
    estado_posible_id:{
        type: Sequelize.UUID,
        field: 'estado_posible_id',
    },
    tipo_documento_id:{
        type: Sequelize.UUID,
        field: 'tipo_documento_id',
    },
    permite_edicion:{
        type: Sequelize.BOOLEAN,
        field:'permite_edicion',
    },
    estatus_principal:{
        type: Sequelize.BOOLEAN,
        field: 'estatus_principal',
    },
}, {
schema: 'comun',
timestamps: false,
freezeTableName: true
});

