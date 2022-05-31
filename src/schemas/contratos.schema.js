import joi from 'joi';

const codigo = joi.number();
const descripcion = joi.string().min(5).max(50);
const comentario = joi.string().min(5).max(255);
const codigoCliente = joi.string().alphanum().min(5).max(10);
const moneda = joi.string().min(1).max(3);
const unido = joi.string().min(1).max(1);
const descuento = joi.number().min(0).max(100);
const fechaInicio = joi.date();
const fechaFinal = joi.date();
const lista = joi.string().min(1).max(1);
const tipoDocumento = joi.string().min(3).max(3);
const contrato = joi.number();
const limite = joi.number();
const order = joi.string();
const page = joi.number()

export const getContratoSchema = joi.object({
  codigo: codigo.required(),
});
export const getClientContratoSchema = joi.object({
  codigoCliente: codigoCliente.required(),
});

export const getQuerySchema = joi.object({
  lista: lista,
  fechaInicio: fechaInicio,
  fechaFinal: fechaFinal,
  limite: limite,
  order: order,
  page: page
});

export const CreateContratoSchema = joi.object({
  descripcion: descripcion.required(),
  comentario: comentario.required(),
  codigoCliente: codigoCliente.required(),
  moneda: moneda.required(),
  unido: unido.required(),
  descuento: descuento.required(),
  fechaInicio: fechaInicio.required(),
  fechaFinal: fechaFinal.required(),
  lista: lista.required(),
  tipoDocumento: tipoDocumento.required(),
});

export const UpdateContratoSchema = joi.object({
  descripcion: descripcion,
  comentario: comentario,
  codigoCliente: codigoCliente,
  moneda: moneda,
  unido: unido,
  descuento: descuento,
  fechaInicio: fechaInicio,
  fechaFinal: fechaFinal,
  lista: lista,
  tipoDocumento: tipoDocumento,
});

export const getPreciosSchema = joi.object({
  codigo: codigo.required(),
  moneda: moneda.required(),
});

export const updatePreciosSchema = joi.object({
  codigo: codigoCliente,
  contrato: contrato,
});
