import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Piso = Postgres.define ('piso', {
    codigo_piso: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'codigo_piso',
        allowNull: false,
    },
    fk_sec_codigo:{
        type: Sequelize.UUID,
        field:'fk_sec_codigo',
    },
    descripcion:{
        type: Sequelize.STRING,
        field:'descripcion',
    },
    estatus:{
        type: Sequelize.BOOLEAN,
        field:'estatus',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});

