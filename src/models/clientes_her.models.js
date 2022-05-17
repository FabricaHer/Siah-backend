import Sequelize  from 'sequelize';
import { Postgres } from './../database/databasePostgres';
export const Clientes_her = Postgres.define ('cliente', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'cliente_id',
    },
    ente_id:{
        type: Sequelize.STRING,
        field:'ente_id',
    },
    agrupar_producto:{
        type: Sequelize.BOOLEAN,
        field:'agrupar_producto',
    },
    cobrar_ultimo_precio: {
        type: Sequelize.BOOLEAN,
        field:'cobrar_ultimo_precio',
    },
    tipo_cliente:{
        type: Sequelize.STRING,
        field:'tipo_cliente'
    },
    limite_credito: {
        type: Sequelize.INTEGER,
        field:'limite_credito',
    },
    dias_plazo:{
        type: Sequelize.FLOAT,
        field:'dias_plazo'
    },
    clasificacion: {
        type: Sequelize.INTEGER,
        field:'clasificacion',
        
    },
    estado: {
        type: Sequelize.INTEGER,
        field:'estado',
        
    },
    tipo_pago: {
        type: Sequelize.INTEGER,
        field:'tipo_pago',
        
    },
    codigo_cliente: {
        type: Sequelize.INTEGER,
        field:'codigo_cliente',
        
    },
    categoria_cliente_id: {
        type: Sequelize.STRING,
        field:'categoria_cliente_id',
        
    },
    persona_id: {
        type: Sequelize.STRING,
        field:'persona_id',
        
    },
    tipo_grupo_id: {
        type: Sequelize.STRING,
        field:'tipo_grupo_id',
        
    },
    pausar: {
        type: Sequelize.BOOLEAN,
        field:'pausar',
        
    },
    }, {
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});