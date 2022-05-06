import joi from 'joi';

const codigo = joi.string().min(3).max(50)
const descripcion = joi.string().min(5).max(50)
const grupo = joi.string().min().max(50)
const marca = joi.string().min(5).max(50)
const costoenOtraMonedaFOB = joi.number().min(0).max(100) //decimal
const honorariosMedicos = joi.string().min(5).max(50)

export const getProductoSchema = joi.object({
    codigo: codigo.required()
})

export const UpdateProductoSchema = joi.object({

    descripcion  : descripcion,
    grupo : grupo,
    marca: marca,
    costoenOtraMonedaFOB : costoenOtraMonedaFOB,
    honorariosMedicos : honorariosMedicos
})