function errorLog(err,req,res,next){

    console.log(err)
    next(err)

}

function boomErrorHandler(err,req,res,next){
    if (err.isBoom){
        const {output} = err
        res.status(output.statusCode).json(output.payload)
      }
      next()
}

function errorHandler(err,req,res,next){
    res.status(500).json({
        mensaje: err.message,
        error: err.stack
    })
}

module.exports = {errorLog,errorHandler,boomErrorHandler}