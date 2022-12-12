import { Documento } from '../models/Postgres/documento.models';
const {Op} = require("sequelize");
import Boom from '@hapi/boom';
// import { Paciente } from '../models/Postgres/pacientes.models';
// import { Ubicacion_paciente } from '../models/Postgres/ubicacion_paciente.models';
import { Area_atentcion } from '../models/Postgres/area_atencion.models';
import { Pabellon } from '../models/Postgres/pabellon.models';
import { Profesional } from '../models/Postgres/profesional.models';
// import { Solicitud_area_atencion } from '../models/Postgres/solici_area_atencion.models';
// import { Tipo_consulta_area_atencion } from '../models/Postgres/tipo_consulta_area_atencion.models';
// import { Habitacion } from '../models/Postgres/habitacion.models';
import { Piso } from '../models/Postgres/piso.models';
// import { Camas } from '../models/Postgres/camas.models';
// import { Consulta } from '../models/Postgres/consulta.models';
// import { Informe_medico_hce } from '../models/Postgres/informeMedico.models';
import { Seccion_comun } from '../models/Postgres/seccion_comun.models';
import { Persona } from '../models/Postgres/persona.models';

class DocumentoHerServices {
  constructor() {
  }
  
  async buscarUno(documento_id) {
    console.log(documento_id)
    const clientes = await Documento.findOne({
      where: {
        estatus_documentos: ['eaacac8a-4c3a-412f-b9ba-fecc9886cb96'],
        fecha_ingreso: {[Op.gt]: '2021-12-30 13:28:25.669'},

      },
      attributes:['numero_factura','fecha_elaboracion','diagnostico'],
      include:[
        // {
        // model: Paciente,
        // attributes:['necesita_aprobacion']
        // },
        // {
        // model: Ubicacion_paciente,
        // },
        {
        model: Area_atentcion,
        attributes:['descripcion_area']
        },{
        model: Persona,
        attributes:['nombre','apellido']
        },
        // {
        // model: Pabellon,
        // attributes:['pabellon_id','descripcion']
        // },
        {
        model: Profesional,
        attributes:['numeroColegio','id']    
        }
    ]
    });
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
}}

module.exports = DocumentoHerServices;