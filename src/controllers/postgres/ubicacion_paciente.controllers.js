
import UbicacionPacienteHerServices from '../../services/postgres/ubicacion_paciente.service';

const services = new UbicacionPacienteHerServices();
//Buscar por codigo de Cliente




// Todos los clientes

export async function getUbicacionPaciente(req, res, next) {
  try {
      console.log('1')
    const Ubicacion_Paciente = await services.buscar();
    res.json(Ubicacion_Paciente);
  } catch (error) {
    next(error);
  }
}