import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Clientes_hce = Postgres.define ('cliente_hce', {
    hce_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'cliente_hce_id'
    },
    cliente_id:{
        type: Sequelize.UUID,
        field:'cliente_id'
    },
    tipo_lista:{
        type: Sequelize.UUID,
        field:'tipo_lista_id'
    },
    activo: {
        type: Sequelize.BOOLEAN,
        field:'activo',
        
    },
    codigo_contrato: {
        type: Sequelize.INTEGER,
        field:'codigo_contrato',
        
    },
    }, {
    schema: 'hce',
    timestamps: false,
    freezeTableName: true
});