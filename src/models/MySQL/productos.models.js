import Sequelize  from 'sequelize';
import { MySQL } from '../database/databaseMySQL';

export const Productos = MySQL.define('DPINV', {
    fechadeActualizacion:{
        type: Sequelize.DATE,
        field: 'INV_FCHACT'
    },
    requierePeso: {
        type: Sequelize.CHAR,
        field: 'INV_REQPES'
    },
    fechadeCreacion:{
        type: Sequelize.DATE,
        field: 'INV_FCHCRE'
    },
    marca:{
        type: Sequelize.STRING,
        field: 'INV_CODMAR'
    },
    costodeAquisicionsinGastos:{
        type: Sequelize.DECIMAL,
        field: 'INV_COSADQ'
    },
    costoenOtraMonedaFOB:{
        type: Sequelize.DECIMAL,
        field: 'INV_COSFOB'
    },
    metododeCosto:{
        type: Sequelize.CHAR,
        field: 'INV_METCOS'
    },
    indicaciondemodificacion:{
        type: Sequelize.TINYINT,
        field: 'INV_RECALC'
    },
    codigodelImpuestos_patente:{
        type: Sequelize.CHAR,
        field: 'INV_IMPPAT'
    },
    registrodeDescripcionAmplia:{
        type: Sequelize.DECIMAL,
        field: 'INV_NUMMEM'
    },
    utilizacion:{
        type: Sequelize.CHAR,
        field: 'INV_UTILIZ'
    },
    porcImpuestoalPreciodeVenta:{
        type: Sequelize.DECIMAL,
        field: 'INV_IMPPVP'
    },
    comisionporVenta:{
        type: Sequelize.DECIMAL,
        field: 'INV_COMVTA'
    },
    procedencia:{
        type: Sequelize.CHAR,
        field: 'INV_PROCED'
    },
    tipodeIVA:{
        type: Sequelize.CHAR,
        field: 'INV_IVA'
    },
    codigodelArancel:{
        type: Sequelize.STRING,
        field: 'INV_ARANCE'
    },
    costodelMercado:{
        type: Sequelize.DECIMAL,
        field: 'INV_COSMER'
    },
    porcentajedeDescuentoporUnidad:{
        type: Sequelize.DECIMAL,
        field: 'INV_PORFAC'
    },
    observacion3:{
        type: Sequelize.STRING,
        field: 'INV_OBS3'
    },
    observacion2:{
        type: Sequelize.STRING,
        field: 'INV_OBS2'
    },
    observacion1:{
        type: Sequelize.STRING,
        field: 'INV_OBS1'
    },
    consideracionCritica:{
        type: Sequelize.DECIMAL,
        field: 'INV_CONCRI'
    },
    existenciaMaximaenUnidades:{
        type: Sequelize.DECIMAL,
        field: 'INV_EXIMAX'
    },
    existenciaMinimaenUnidades:{
        type: Sequelize.DECIMAL,
        field: 'INV_EXIMIN'
    },
    grupo:{
        type: Sequelize.STRING,
        field: 'INV_GRUPO'
    },
    costocuandoseInicioelEjercicio:{
        type: Sequelize.DECIMAL,
        field: 'INV_COSINI'
    },
    costoUnitario:{
        type: Sequelize.DECIMAL,
        field: 'INV_COSUND'
    },
    ubicacionFisica:{
        type: Sequelize.STRING,
        field: 'INV_UBICAC'
    },
    descripcion:{
        type: Sequelize.STRING,
        field: 'INV_DESCRI'
    },
    codigo:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        field: 'INV_CODIGO'
    },
    fotoBmp:{
        type: Sequelize.STRING,
        field: 'INV_FILBMP'
    },
    preciodeVentaRegular:{
        type: Sequelize.DECIMAL,
        field: 'INV_PVPORG'
    },
    porcArancel:{
        type: Sequelize.DECIMAL,
        field: 'INV_PORARA'
    },
    editable:{
        type: Sequelize.CHAR,
        field: 'INV_EDITAR'
    },
    estado:{
       type: Sequelize.CHAR,
        field: 'INV_ESTADO'
    },
    codigodeTallas:{
        type: Sequelize.STRING,
        field: 'INV_TALLAS'
    },
    gradosalcohólicos:{
        type: Sequelize.DECIMAL,
        field: 'INV_GRADOS'
    },
    capacidadporBotella:{
        type: Sequelize.DECIMAL,
        field: 'INV_CAPACI'
    },
    publicareneDpcommerce:{
        type: Sequelize.CHAR,
        field: 'INV_WEB'
    },
    informacionparalaWeb:{
        type: Sequelize.DECIMAL,
        field: 'INV_WEBMEM'
    },
    requiereUnidaddeMedida:{
        type: Sequelize.CHAR,
        field: 'INV_REQMED'
    },
    mesesdeGarantia:{
        type: Sequelize.DECIMAL,
        field: 'INV_MESGAR'
    },
    promocion:{
        type: Sequelize.CHAR,
        field: 'INV_PROMO'
    },
    puertodeImpresion:{
        type: Sequelize.STRING,
        field: 'INV_LPT'
    },
    principioActivo:{
        type: Sequelize.STRING,
        field: 'INV_PRIACT'
    },
    honorariosMedicos:{
        type: Sequelize.CHAR,
        field: 'INV_HONMED'
    },
    cambiarPrecio:{
        type: Sequelize.CHAR,
        field: 'INV_CAMPRE'
    },
    tipoServicio:{
        type: Sequelize.CHAR,
        field: 'INV_TSERV'
    },
    pvpBase:{
        type: Sequelize.DECIMAL,
        allowNull: false,
        field: 'INV_PVPBAS'
    },
    INV_CODUBI:{
        type: Sequelize.STRING
    },
    INV_EXIEME:{
        type: Sequelize.DECIMAL
    },
    INV_TIEREP:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    INV_CODPRT:{
        type: Sequelize.CHAR
    },
    INV_PRINCI:{
        type: Sequelize.STRING
    },
    descripcion2:{
        type: Sequelize.CHAR,
        allowNull: false,
        field: 'INV_DESC'
    },
    INV_PRES:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_VOLU:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_CODPRA:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_GRUFAR:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_GENERO:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_AUTORI:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    INV_CONCEN:{
        type: Sequelize.DECIMAL
    },
    INV_CONUND:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_DILUCI:{
        type: Sequelize.DECIMAL
    },
    INV_DILUND:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_CODVIA:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_CONCE2:{
        type: Sequelize.DECIMAL
    },
    INV_CONCE3:{
        type: Sequelize.DECIMAL
    },
    INV_CONUN2:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_CONUN3:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_DESUND:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    Regulado:{
        type: Sequelize.CHAR,
        allowNull: false,
        field: 'INV_REGULA'
    },
    PvpRegulado:{
        type: Sequelize.DECIMAL,
        allowNull: false,
        field: 'INV_PVPREG'
    },
    INV_PORUSO:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    INV_ULTCOS:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    INV_COSPRO:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Clasificacion:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'INV_CLASIF'
    },
    INV_QUIRUR:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});
