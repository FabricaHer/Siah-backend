import Sequelize  from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Area_atencion } from './area_atencion.models';
import { Estatus_documento } from './estatus_documento.models';
import { Numero_identificacion } from './numero_identificacion.models';
import { Pabellon } from './pabellon.models';
import { Paciente } from './pacientes.models';
import { Persona } from './persona.models';
import { Profesional } from './profesional.models';
// import {Ubicacion_paciente} from './ubicacion_paciente.models'
export const Documento = Postgres.define ('documento', {
    documento_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        field: 'documento_id',
        allowNull: false,
    },
    paciente_id:{
        type: Sequelize.UUID,
        field:'paciente_id',
    },
    tipo_documento_subtipo:{
        type: Sequelize.UUID,
        field:'tipo_documento_subtipo_documento_id',
    },
    dato_variable:{
        type: Sequelize.UUID,
        field:'dato_variable_id',
    },
    pabellonid:{
        type: Sequelize.UUID,
        field:'pabellon_id',
    },
    estatus_documentos:{
        type: Sequelize.UUID,
        field:'estatus_documentos_id',
    },
    area_atencion_id:{
        type: Sequelize.UUID,
        field:'area_atencion_id',
    },
    estado_area_atencion:{
        type: Sequelize.UUID,
        field:'estado_area_atencion_id',
    },
    contrato_id:{
        type: Sequelize.UUID,
        field:'contrato_id',
    },
    cliente_paciente_id:{
        type: Sequelize.UUID,
        field:'cliente_paciente_id',
    },
    fecha_ingreso: {
        type: Sequelize.STRING, // Timestamps?..
        field:'fecha_ingreso',
    },
    usuario:{
        type: Sequelize.UUID,
        field:'usuario_id',
    },
    profesional_id:{
        type: Sequelize.UUID,
        field:'profesional_id',
    },
    nombre_cliente:{
        type: Sequelize.STRING, 
        field:'nombre_cliente',
    },
    telefono_cliente:{
        type: Sequelize.STRING, 
        field:'telefono_cliente',
    },
    siglas_cliente:{
        type: Sequelize.STRING, 
        field:'siglas_cliente',
    },
    direccion_fiscal_cliente:{
        type: Sequelize.STRING, 
        field:'direccion_fiscal_cliente',
    },
    numero_factura:{
        type: Sequelize.INTEGER, 
        field:'numero_factura',
    },
    cobertura:{
        type: Sequelize.FLOAT, 
        field:'cobertura',
    },
    a__terceros:{
        type: Sequelize.BOOLEAN, 
        field:'a__terceros',
    },
    monto_terceros:{
        type: Sequelize.FLOAT, 
        field:'monto_terceros',
    },
    paquete:{
        type: Sequelize.BOOLEAN, 
        field:'paquete',
    },
    total:{
        type: Sequelize.FLOAT, 
        field:'total',
    },
    subtotal:{
        type: Sequelize.FLOAT, 
        field:'subtotal',
    },
    descuento:{
        type: Sequelize.FLOAT, 
        field:'descuento',
    },
    iva:{
        type: Sequelize.FLOAT, 
        field:'iva',
    },
    desde_resumen:{
        type: Sequelize.DATE, 
        field:'desde_resumen',
    },
    hasta_resumen:{
        type: Sequelize.DATE, 
        field:'hasta_resumen',
    },
    numero_control:{
        type: Sequelize.INTEGER, 
        field:'numero_control',
    },
    fecha_elaboracion:{
        type: Sequelize.DATE, 
        field:'fecha_elaboracion',
    },
    clave_ingreso:{
        type: Sequelize.INTEGER, 
        field:'clave_ingreso',
    },
    operador:{
        type: Sequelize.STRING, 
        field:'operador',
    },
    clave_egreso:{
        type: Sequelize.INTEGER, 
        field:'clave_egreso',
    },
    fecha_egreso:{
        type: Sequelize.STRING, //TimeStamps???..
        field:'fecha_egreso',
    },
    fecha_vencimiento_clave:{
        type: Sequelize.STRING, //TimeStamps???.
        field:'fecha_vencimiento_clave',
    },
    observaciones:{
        type: Sequelize.STRING, 
        field:'observaciones',
    },
    diagnostico:{
        type: Sequelize.STRING, 
        field:'diagnostico',
    },
    referido_desde:{
        type: Sequelize.STRING, 
        field:'referido_desde',
    },
    guardar_copia:{
        type: Sequelize.BOOLEAN, 
        field:'guardar_copia',
    },
    fecha_vencimiento:{
        type: Sequelize.DATE, 
        field:'fecha_vencimiento',
    },
    num_resumen:{
        type: Sequelize.INTEGER, 
        field:'num_resumen',
    },
    serie_fiscal:{
        type: Sequelize.UUID, 
        field:'serie_fiscal_id',
    },
    sub_estatus_documentos_id:{
        type: Sequelize.UUID, 
        field:'sub_estatus_documentos_id',
    },
    cliente_persona_natural:{
        type: Sequelize.UUID, 
        field:'cliente_persona_natural',
    },
    categoria_cliente:{
        type: Sequelize.UUID, 
        field:'categoria_cliente_id',
    },
    caso:{
        type: Sequelize.UUID, 
        field:'caso_id',
    },
    contrato:{
        type: Sequelize.STRING, 
        field:'contrato',
    },
    bloqueada:{
        type: Sequelize.BOOLEAN, 
        field:'bloqueada',
    },
    },{
    schema: 'comun',
    timestamps: false,
    freezeTableName: true
});


Paciente.hasMany(Documento, {foreignKey: 'paciente_id'})
Documento.belongsTo(Paciente, {foreignKey: 'paciente_id', targetKey: 'id'})

// Ubicacion_paciente.hasMany(Documento, {foreignKey: 'documento_id', as: 'documento'})
// Documento.belongsTo(Ubicacion_paciente, {foreignKey: 'documento_id', targetKey: 'documento_id'})

Area_atencion.hasMany(Documento, {foreignKey: 'area_atencion_id', as: 'area_atencion'})
Documento.belongsTo(Area_atencion, {foreignKey: 'area_atencion_id', targetKey: 'area_atencion_id'})

Pabellon.hasMany(Documento, {foreignKey: 'pabellonid', as: 'pabellonid'})
Documento.belongsTo(Pabellon, {foreignKey: 'pabellonid', targetKey: 'pabellon_id'})

Profesional.hasMany(Documento, {foreignKey: 'profesional_id', as: 'profesional'})
Documento.belongsTo(Profesional, {foreignKey: 'profesional_id', targetKey: 'id'})

Persona.hasMany(Documento, {foreignKey: 'paciente_id'})
Documento.belongsTo(Persona, {foreignKey: 'paciente_id', targetKey: 'persona_id'})

Estatus_documento.hasMany(Documento, {foreignKey: 'estatus_documentos', as: 'estatus_documentos'})
Documento.belongsTo(Estatus_documento, {foreignKey: 'estatus_documentos', targetKey: 'estatus_documentos_id'})

Numero_identificacion.hasMany(Documento, {foreignKey: 'paciente_id', as: 'paciente_id'})
Documento.belongsTo(Numero_identificacion, {foreignKey: 'paciente_id', targetKey: 'persona'})
