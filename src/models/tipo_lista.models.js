import Sequelize  from 'sequelize';
import { Postgres } from './../database/databasePostgres';
export const Tipo_lista = Postgres.define ('tipo_lista', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'tipo_lista_id'
    },
    codigo:{
        type: Sequelize.STRING,
        field:'codigo'
    },
    activo: {
        type: Sequelize.BOOLEAN,
        field:'activo',
        
    },
    prioridad: {
        type: Sequelize.INTEGER,
        field:'prioridad',
        
    },
    }, {
    schema: 'hce',
    timestamps: false,
    freezeTableName: true
});