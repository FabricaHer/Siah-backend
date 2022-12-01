import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const Persona = Postgres.define ('persona', {
    persona_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'persona_id',
        allowNull: false,
    },
    nacionalidad:{
        type: Sequelize.CHAR,
        field:'nacionalidad',
    },
    nombre: {
        type: Sequelize.STRING,
        field:'nombre',
    },
    apellido:{
    type: Sequelize.STRING,
    field:'apellido', 
    },
    fecha_nacimiento: {
    type: Sequelize.DATE,
    field:'fecha_nacimiento',
    },
    sexo:{
    type: Sequelize.BOOLEAN,
    field:'sexo',
    },
    numero_de_historia: {
    type: Sequelize.STRING,
    field:'numero_de_historia',
    },
    direccion: {
        type: Sequelize.STRING,
        field:'direccion',
    },
    correo_electronico: {
        type: Sequelize.STRING,
        field:'correo_electronico',
    },
    fecha_creacion: {
        type: Sequelize.DATE,
        field:'fecha_creacion',
    },
    activo: {
        type: Sequelize.DATE,
        field:'activo',
    },
    parroquia_id: {
        type: Sequelize.UUID,
        field:'parroquia_id',
    },
    ocupacion_id: {
        type: Sequelize.UUID,
        field:'ocupacion_id',
    },
    estado_civil: {
        type: Sequelize.INTEGER,
        field:'estado_civil',
    },
    
 }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});