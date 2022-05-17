import joi from 'joi'

const codigo = joi.number()
const situacion = joi.string().min(5).max(50)
const clasificcion = joi.string().min(5).max(50)


export const getClientesSchema = joi.object({
    codigo: codigo.required()
})


export const getQuerySchema = joi.object({
    situacion: situacion,
    clasificcion: clasificcion,

}) 

export const updateEstadoSchema = joi.object({
    situacion: situacion
})
