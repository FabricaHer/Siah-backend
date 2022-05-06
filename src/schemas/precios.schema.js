import joi from 'joi';


const codigoProducto = joi.string();
const unidadMedida = joi.string().min(3);
const precioVenta = joi.number();
const precioCompra = joi.number();
const contrato = joi.number();
const codigoCliente = joi.string().alphanum().min(5).max(10);
const descuento = joi.number().max(100);
const fechaVencimiento = joi.date();
const isDolar = joi.boolean();

export const createPreciosSchema = joi
  .alternatives()
  .conditional(joi.object({ isDolar: true }).unknown(), {
    then: joi.object({
      codigoProducto: codigoProducto.required(),
      unidadMedida: unidadMedida,
      precioVenta: precioVenta.required(),
      precioCompra: precioCompra,
      contrato: contrato.required(),
      codigoCliente: codigoCliente.required(),
      isDolar: isDolar.required(),
    }),
    otherwise: joi.object({
      codigoProducto: codigoProducto.required(),
      unidadMedida: unidadMedida,
      precioVenta: precioVenta.required(),
      descuento: descuento,
      fechaVencimiento: fechaVencimiento.required(),
      contrato: contrato.required(),
      isDolar: isDolar.required(),
    }),
  });

export const getPrecioContratoSchema = joi.object({
  contrato : contrato.required()
})

export const getPrecioProductoSchema = joi.object({
  codigoProducto: codigoProducto.required()
})
