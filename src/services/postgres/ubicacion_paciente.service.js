import Boom from '@hapi/boom';
import dayjs from 'dayjs';
import { Area_atencion } from '../../models/Postgres/area_atencion.models';
import { Camas } from '../../models/Postgres/camas.models';
import { Documento } from '../../models/Postgres/documento.models';
import { Numero_identificacion } from '../../models/Postgres/numero_identificacion.models';
import { Pabellon } from '../../models/Postgres/pabellon.models';
import { Persona } from '../../models/Postgres/persona.models';
import { Piso } from '../../models/Postgres/piso.models';
import { Seccion_comun } from '../../models/Postgres/seccion_comun.models';
const { Op, Sequelize } = require('sequelize');
import { Ubicacion_paciente } from '../../models/Postgres/ubicacion_paciente.models';

Documento;

export const proof = 'l';
class UbicacionPacienteHerServices {
  constructor() {}

  async buscar() {
    try {
      // const operador = `select max(up.fecha_de_atencion) from comun.documento d
      // left join comun.ubicacion_paciente up on up.documento_id = d.documento_id
      // where estatus_documentos_id = 'eaacac8a-4c3a-412f-b9ba-fecc9886cb96' group by d.documento_id`
      // console.log(operador.replace(/[`]+/g, ''));
      let fecha1 = [];

      const Fechas = await Ubicacion_paciente.sequelize
        .query(`select max(up.fecha_de_atencion) from comun.documento d 
    left join comun.ubicacion_paciente up on up.documento_id = d.documento_id 
    where estatus_documentos_id = 'eaacac8a-4c3a-412f-b9ba-fecc9886cb96' group by d.documento_id`);
      // const Fechas = await Documento.findAll({
      //   where: {

      //     estatus_documentos: ['eaacac8a-4c3a-412f-b9ba-fecc9886cb96'],

      //     // fecha_ingreso: {[Op.gt]: '2021-12-30 13:28:25.669'},

      //   },
      //   group: ['documento.documento_id'],
      //   attributes:['documento_id'],
      //   logging: console.log,
      //   include:[
      //             {
      //     model: Ubicacion_paciente,
      //     attributes:[  [Sequelize.fn('max', Sequelize.col('fecha_de_atencion')),'max']],
      //     // attributes:[  [Ubicacion_paciente.sequelize.literal("max(ubicacion_paciente.fecha_de_atencion)"),'fecha_de_atencion']],
      //     },
      //   ]
      // })
      //     const Fechas = await Ubicacion_paciente.findAll({
      // attributes:[

      //         [Sequelize.fn('max', Sequelize.col('fecha_de_atencion')),'max']],
      //         include:[{
      //           model: Documento,
      //           attributes:['documento_id']
      //         }]
      //       })
      // fecha_ingreso: {[Op.gt]: '2021-12-30 13:28:25.669'},

      // console.log(Fechas[0])
      Fechas[0].map((fecha) => {
        const day = dayjs(fecha.max).format('YYYY-MM-DD HH:mm:ss.SSS');
        fecha1.push(day);
      });

      const Ubicacion = await Ubicacion_paciente.findAll({
        where: {
          fecha_de_atencion:
            // '2022-12-10'
            {
              [Op.in]: fecha1,
            },
        },
        logging: console.log,
        include:[{model: Camas,attributes:['descripcion']},{model: Documento, as: 'documento',attributes:['numero_factura','documento_id','nombre_cliente','diagnostico'],
      include:[
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
          // include:[{model:Seccion_comun,attributes:['descripcion'],include:[{model:Piso,attributes:['descripcion']}]}],
          attributes:['descripcion']
          },
          {
          model: Numero_identificacion,
          attributes:['valor_identificacion']
          }
      ]}]
      });
      if (!Ubicacion) {
        throw Boom.notFound('Pacientes no encontrados');
      }
      return Ubicacion;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UbicacionPacienteHerServices;

// const Ubicacion = await Ubicacion_paciente.findAll({
//   limit: 30,
//   where: {

//     // codigo: codigo
//     //   [Op.or]: [{clasificacion: clasificacion},
//     // { nombre:{[Op.like]: `%${nombre}%`}  }]
//   },
//   attributes:['area_atencion_id','descripcion_area']
// });
// if (!Ubicacion) {
//   throw Boom.notFound('Pacientes no encontrados');
// }

// const Ubicacion = await Ubicacion_paciente.sequelize.query(`select d.numero_factura, c.descripcion as cama, up.fecha_de_atencion, d.diagnostico, p.nombre
// from comun.ubicacion_paciente up left join comun.documento d on d.documento_id = up.documento_id
// left join comun.camas c on c.cam_codigo = up.cama_id
// left join comun.persona p on p.persona_id = d.paciente_id
// where up.fecha_de_atencion in (select max(up.fecha_de_atencion) from comun.documento d
// left join comun.ubicacion_paciente up on up.documento_id = d.documento_id
// where estatus_documentos_id = 'eaacac8a-4c3a-412f-b9ba-fecc9886cb96' group by d.documento_id );`);
