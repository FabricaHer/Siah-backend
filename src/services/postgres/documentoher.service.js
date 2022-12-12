import { Documento } from '../../models/Postgres/documento.models';
// const {Op,Sequelize} = require("sequelize");
// const { QueryTypes } = require('sequelize');
// const Sequelize = require("sequelize");

import Boom from '@hapi/boom';
// import { Paciente } from '../models/Postgres/pacientes.models';
// import { Ubicacion_paciente } from '../models/Postgres/ubicacion_paciente.models';
import { Area_atencion } from '../../models/Postgres/area_atencion.models';
import { Pabellon } from '../../models/Postgres/pabellon.models';
// import { Profesional } from '../models/Postgres/profesional.models';
// import { Solicitud_area_atencion } from '../models/Postgres/solici_area_atencion.models';
// import { Tipo_consulta_area_atencion } from '../models/Postgres/tipo_consulta_area_atencion.models';
// import { Habitacion } from '../models/Postgres/habitacion.models';
import { Piso } from '../../models/Postgres/piso.models';
// import { Camas } from '../models/Postgres/camas.models';
// import { Consulta } from '../models/Postgres/consulta.models';
// import { Informe_medico_hce } from '../models/Postgres/informeMedico.models';
import { Seccion_comun } from '../../models/Postgres/seccion_comun.models';
import { Persona } from '../../models/Postgres/persona.models';
import { Numero_identificacion } from '../../models/Postgres/numero_identificacion.models';
// import sequelize from 'sequelize';

class DocumentoHerServices {
  constructor() {
  }
  async buscarTodos(documento_id) {
    console.log(documento_id)
    const clientes = await Documento.findAll({
      where: {

        estatus_documentos: ['eaacac8a-4c3a-412f-b9ba-fecc9886cb96'],

        // fecha_ingreso: {[Op.gt]: '2021-12-30 13:28:25.669'},


      },
      attributes:['numero_factura','fecha_ingreso','diagnostico','fecha_egreso','nombre_cliente','documento_id'],
          
    // group: ['documento.documento_id'],
      include:[
        // {
        // model: Paciente,
        // attributes:['necesita_aprobacion']
        // },
        // {
        // model: Ubicacion_paciente,
        // // attributes:[  [Ubicacion_paciente.sequelize.literal("max(ubicacion_paciente.fecha_de_atencion)"),'fecha_de_atencion']],
        // // group: ['ubicacion_paciente_id'],
        // include:[{model:Camas, attributes:['descripcion']}]
        // },
        {
        model: Area_atencion,
        attributes:['descripcion_area']
        },
        {
        model: Persona,
        attributes:['nombre','apellido','fecha_nacimiento', [Persona.sequelize.literal("Case when sexo = true then 'Masculino' else 'Femenino' End"),'sexo']]
        },
        {
        model: Pabellon,
        include:[{model:Seccion_comun,attributes:['seccion_id'],include:[{model:Piso,attributes:['descripcion']}]}],
        attributes:['descripcion']
        },
        {
        model: Numero_identificacion,
        attributes:['valor_identificacion']
        }
        // {
        // model: Profesional,
        // attributes:['numeroColegio','id']    
        // },

    ]

    });
    // let ids =  clientes.map((admision) => admision.dataValues.documento_id    )
   
    console.log(clientes[0].dataValues.documento_id)
    
     let prueba =  clientes.map((admision) => admision.dataValues.documento_id    )
    console.log(prueba)
    if (!clientes) {
        throw Boom.notFound('Contrato no encontrado');
      }
  
      return clientes;
}



  async buscar() {
  try {
    const clientes = await Seccion_comun.findAll({
      limit: 30,
      where: {
        // codigo: codigo
        //   [Op.or]: [{clasificacion: clasificacion},
        // { nombre:{[Op.like]: `%${nombre}%`}  }]
      }, 
      include:[{
        model: Pabellon,
      } ,{
         model: Piso,
      }
    ]
    });
    if (!clientes) {
      throw Boom.notFound('Cliente no encontrados');
    }
  return clientes;
} catch (error) {
    throw new Error(error);
  }
}
async todos() {
  try {

    const clientes = await Documento.sequelize.query(`select max(up.fecha_de_atencion),d.paciente_id ,d.paciente_id from comun.documento d 
    inner join comun.ubicacion_paciente up on up.documento_id = d.documento_id 
    where estatus_documentos_id = 'eaacac8a-4c3a-412f-b9ba-fecc9886cb96' group by (d.documento_id)`);



    if (!clientes) {
      throw Boom.notFound('Cliente no encontrados');
    }
  return clientes;

} catch (error) {
    throw new Error(error);
  }
}}

module.exports = DocumentoHerServices;










// const clientes = await Documento.findAll({
//   where: {

//     estatus_documentos: ['eaacac8a-4c3a-412f-b9ba-fecc9886cb96'],
    

//     // fecha_ingreso: {[Op.gt]: '2021-12-30 13:28:25.669'},
  

//   },
//   attributes:['numero_factura','fecha_ingreso','diagnostico','fecha_egreso','nombre_cliente',[Ubicacion_paciente.sequelize.literal("max(ubicacion_paciente.fecha_de_atencion)"),'fecha_de_atencion'],],
      
// group: ['documento.documento_id'],
// // group: ['documento.documento_id','ubicacion_paciente.ubicacion_paciente_id','ubicacion_paciente.area_atencion_id','"ubicacion_paciente->cama"."cam_codigo"'],
// // 'ubicacion_paciente.',
//   include:[
//     // {
//     // model: Paciente,
//     // attributes:['necesita_aprobacion']
//     // },
//     {
//     model: Ubicacion_paciente,
//     attributes:[[Sequelize.fn('count', Sequelize.fn('DISTINCT', Sequelize.col('ubicacion_paciente.ubicacion_paciente_id'))), 'ubicacion_paciente_id'],
//     [Sequelize.fn('count', Sequelize.fn('DISTINCT', Sequelize.col('ubicacion_paciente.area_atencion_id'))), 'area_atencion_id'],],
//     // attributes:[  [Ubicacion_paciente.sequelize.literal("max(ubicacion_paciente.fecha_de_atencion)"),'fecha_de_atencion']],
//     // group: ['ubicacion_paciente_id'],
//     include:[{model:Camas,attributes:[[Sequelize.fn('count', Sequelize.fn('DISTINCT', Sequelize.col('"ubicacion_paciente->cama"."cam_codigo"'))), 'cam_codigo'],] }]
//     },

// ]
// });


// const clientes = await Documento.sequelize.query(`select max(up.fecha_de_atencion),d.paciente_id ,d.paciente_id from comun.documento d 
// inner join comun.ubicacion_paciente up on up.documento_id = d.documento_id 
// where estatus_documentos_id = 'eaacac8a-4c3a-412f-b9ba-fecc9886cb96' group by (d.documento_id)`);

