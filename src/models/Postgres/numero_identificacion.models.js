import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Numero_identificacion = Postgres.define ('numero_identificacion', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'numero_identificacion_id',
        allowNull: false,
    },
    persona:{
        type: Sequelize.UUID,
        field:'persona_id',
        allowNull: false,
    },
    tipo_documento:{
        type: Sequelize.UUID,
        field:'tipo_documento_id',
        allowNull: false,
    },
    valor_identificacion: {
        type: Sequelize.STRING,
        field:'valor_identificacion',
        allowNull: false,
    },
    identificacion_menor: {
        type: Sequelize.INTEGER,
        field:'identificacion_menor', 
    },
    activo: {
        type: Sequelize.BOOLEAN,
        field:'activo',
        
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});