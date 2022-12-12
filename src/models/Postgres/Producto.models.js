import sequelize from 'sequelize';
import Sequelize from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
export const producto = Postgres.define ('producto', {
producto:{
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'producto_id',
},
tipoImpuesto:{
    type: sequelize.UUID,
    field: 'tipo_impuesto_id',
},
grupo:{
    type: Sequelize.UUID,
    field: 'grupo_id',
},
subTipo:{
    type: Sequelize.UUID,
    field: 'sub_tipo_rubro_id',
},
procedimiento:{
    type: Sequelize.UUID,
    field: 'idtipoprocedimiento'
},
precioVentaBase:{
    type: Sequelize.FLOAT,
    field: 'precio_venta_base'
},
costoPromedio:{
    type: Sequelize.FLOAT,
    field: 'costo_promedio',
},
tiempoReposicion:{
    type: Sequelize.INTEGER,
    field: 'tiempo_reposicion',
},
ultimoCosto:{
    type: Sequelize.FLOAT,
    field: 'ultimo_costo',
},
metodoCosto:{
    type: Sequelize.STRING,
    field: 'tipo_metodo_costo',
},
ultimoCostoAlto:{
    type: Sequelize.FLOAT,
    field: 'ultimo_costo_mas_alto',
},
descripcion:{
    type: Sequelize.STRING,
    field: 'descripcion'
},
observacion:{
    type: Sequelize.STRING,
    field: 'observacion',
},
regulado:{
    type: Sequelize.BOOLEAN,
    field: 'regulado',
},
precioRegulado:{
    type: Sequelize.FLOAT,
    field: 'precio_regulado',
},
honorarioMedico:{
    type: Sequelize.BOOLEAN,
    field: 'honorario_medico',
},
transfusion:{
    type: Sequelize.BOOLEAN,
    field: 'transfusion',
},
codigoProducto:{
    type: Sequelize.INTEGER,
    field: 'codigo_producto',
},
cambiarPrecio:{
    type: Sequelize.BOOLEAN,
    field: 'cambiar_precio',
},
codigoAlternativo:{
    type: Sequelize.STRING,
    field: 'codigo_alternativo'
},
procedimientoConNacimiento:{
    type: Sequelize.BOOLEAN,
    field: 'is_procedimiento_con_nacimiento',
},
activo:{
    type: Sequelize.BOOLEAN,
    field: 'activo',
},
fechaActualizacion:{
    type: Sequelize.TIME,
    field: 'fecha_actualizacion',
},
terapiaRespiratoria:{
    type: Sequelize.BOOLEAN,
    field: 'terapia_respiratoria',
},
dosificable:{
    type: Sequelize.BOOLEAN,
    field: 'es_dosificable',
},
}, {
schema: 'comun',
timestamps: false,
freezeTableName: true 
});