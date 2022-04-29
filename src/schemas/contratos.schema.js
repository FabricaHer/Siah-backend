import joi from 'joi'

// "descripcion": "BAREMO PRUEBA (2022)",
// "comentario": "Baremo 2022",
// "codigoCliente": "0000000002",
// "moneda": "Bs",
// "unido": "S",
// "descuento": "10",
// "fechaInicio": "2022-01-01",
// "fechaFinal": "2023-06-30",
// "lista": "W",
// "tipoDocumento": "FAV" 

const codigo = joi.number()
const descripcion = joi.string().min(5).max(50)
const comentario = joi.string().min(5).max(255)
const codigoCliente = joi.string().alphanum().min(5).max(10)
const moneda = joi.string().min(1).max(3)
const unido = joi.string().min(1).max(1)
const descuento = joi.number().min(0).max(100)
const fechaInicio = joi.date()
const fechaFinal = joi.date()
const lista = joi.string().min(1).max(1)
const tipoDocumento = joi.string().min(3).max(3)


export const getContratoSchema = joi.object({
    codigo: codigo.required()
})
export const getClientContratoSchema = joi.object({
    codigoCliente: codigoCliente.required()
})


export const getQuerySchema = joi.object({
    lista: lista,
    codigoCliente: codigoCliente,
    fechaInicio:fechaInicio,
    fechaFinal:fechaFinal
}) 

export const CreateContratoSchema = joi.object({

 descripcion  : descripcion.required(),
 comentario : comentario.required(),
 codigoCliente : codigoCliente.required(),
 moneda  : moneda.required(),
 unido : unido.required(),
 descuento : descuento.required(),
 fechaInicio : fechaInicio.required(),
 fechaFinal : fechaFinal.required(),
 lista : lista.required(),
 tipoDocumento: tipoDocumento.required()

})

export const UpdateContratoSchema = joi.object({

    descripcion  : descripcion,
    comentario : comentario,
    codigoCliente : codigoCliente,
    moneda  : moneda,
    unido : unido,
    descuento : descuento,
    fechaInicio : fechaInicio,
    fechaFinal : fechaFinal,
    lista : lista,
    tipoDocumento: tipoDocumento
   
})

