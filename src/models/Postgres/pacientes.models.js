import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Paciente = Postgres.define ('paciente', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'paciente_id',
        allowNull: false,
    },
    parentesco:{
        type: Sequelize.UUID,
        field:'parentesco_id',
    },
    titular:{
        type: Sequelize.UUID,
        field:'titular_id',
    },
    numero_de_historia: {
        type: Sequelize.STRING,
        field:'numero_de_historia',
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});