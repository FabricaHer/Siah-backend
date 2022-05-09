import Sequelize from 'sequelize';
import { MySQL } from '../database/database';

export const Clientes = MySQL.define(
  'DPCLIENTES',
  {
    cuentaCobrar: {
      type: Sequelize.CHAR,
      field: 'CLI_CUENTA',
    },
    codigo: {
      type: Sequelize.CHAR,
      primaryKey: true,
      field: 'CLI_CODIGO',
    },
    clasificacion: {
      type: Sequelize.CHAR,
      field: 'CLI_CODCLA',
    },
    nombre: {
      type: Sequelize.CHAR,
      field: 'CLI_NOMBRE',
    },
    direccion1: {
      type: Sequelize.CHAR,
      field: 'CLI_DIR1',
    },
    direccion2: {
      type: Sequelize.CHAR,
      field: 'CLI_DIR2',
    },
    direccion3: {
      type: Sequelize.CHAR,
      field: 'CLI_DIR3',
    },
    direccion4: {
      type: Sequelize.CHAR,
      field: 'CLI_DIR4',
    },
    codigoArea: {
      type: Sequelize.CHAR,
      field: 'CLI_AREA',
    },
    telefono1: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL1',
    },
    telefono2: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL2',
    },
    telefono3: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL3',
    },
    telefono4: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL4',
    },
    telefono5: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL5',
    },
    fax: {
      type: Sequelize.CHAR,
      field: 'CLI_TEL6',
    },
    descuento: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DESCUE',
    },
    limiteCredito: {
      type: Sequelize.DECIMAL,
      field: 'CLI_LIMITE',
    },
    DiasVencimientoCredito: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DIAVEN',
    },
    limiteMontoVencimiento: {
      type: Sequelize.DECIMAL,
      field: 'CLI_MTOVEN',
    },
    diasPlazo: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DIAS',
    },
    listaPrecios: {
      type: Sequelize.CHAR,
      field: 'CLI_LISTA',
    },
    comentario1: {
      type: Sequelize.CHAR,
      field: 'CLI_OBS1',
    },
    comentario2: {
      type: Sequelize.CHAR,
      field: 'CLI_OBS2',
    },
    categoria: {
      type: Sequelize.CHAR,
      field: 'CLI_CATEGO',
    },
    codigoVendedor: {
      type: Sequelize.CHAR,
      field: 'CLI_CODVEN',
    },
    condicionesPago: {
      type: Sequelize.CHAR,
      field: 'CLI_CONDIC',
    },
    fechaRegistro: {
      type: Sequelize.DATE,
      field: 'CLI_FECHA',
    },
    rif: {
      type: Sequelize.CHAR,
      field: 'CLI_RIF',
    },
    numeroFiscal: {
      type: Sequelize.CHAR,
      field: 'CLI_NIT',
    },
    contribuyenteIVA: {
      type: Sequelize.CHAR,
      field: 'CLI_CONTRI',
    },
    actividadEconomica: {
      type: Sequelize.CHAR,
      field: 'CLI_ACTIVI',
    },
    correo: {
      type: Sequelize.CHAR,
      field: 'CLI_EMAIL',
    },
    monedaExtranjera: {
      type: Sequelize.CHAR,
      field: 'CLI_ENOTRA',
    },
    campoMemo: {
      type: Sequelize.DECIMAL,
      field: 'CLI_NUMMEM',
    },
    situacion: {
      type: Sequelize.CHAR,
      field: 'CLI_SITUAC',
    },
    codigoCobrador: {
      type: Sequelize.CHAR,
      field: 'CLI_CODCOB',
    },
    figuraTributaria: {
      type: Sequelize.CHAR,
      field: 'CLI_TIPPER',
    },
    residePais: {
      type: Sequelize.CHAR,
      field: 'CLI_RESIDE',
    },
    zonaComercial: {
      type: Sequelize.CHAR,
      field: 'CLI_ZONANL',
    },
    ultimoPrecio: {
      type: Sequelize.CHAR,
      field: 'CLI_PRECIO',
    },
    contribuyenteEspecial: {
      type: Sequelize.CHAR,
      field: 'CLI_CONESP',
    },
    archivoBmp: {
      type: Sequelize.CHAR,
      field: 'CLI_FILBMP',
    },
    pais: {
      type: Sequelize.CHAR,
      field: 'CLI_PAIS',
    },
    estado: {
      type: Sequelize.CHAR,
      field: 'CLI_ESTADO',
    },
    municipio: {
      type: Sequelize.CHAR,
      field: 'CLI_MUNICI',
    },
    parroquia: {
      type: Sequelize.CHAR,
      field: 'CLI_PARROQ',
    },
    paginaWeb: {
      type: Sequelize.CHAR,
      field: 'CLI_WEB',
    },
    celular1: {
      type: Sequelize.CHAR,
      field: 'CLI_CELUL1',
    },
    celular2: {
      type: Sequelize.CHAR,
      field: 'CLI_CELUL2',
    },
    claveWeb: {
      type: Sequelize.CHAR,
      field: 'CLI_CLAVE',
    },
    inicioVacaciones: {
      type: Sequelize.DATE,
      field: 'CLI_VACINI',
    },
    FinVacaciones: {
      type: Sequelize.DATE,
      field: 'CLI_VACFIN',
    },
    capitalSuscrito: {
      type: Sequelize.DECIMAL,
      field: 'CLI_CAPSUS',
    },
    pagaLun: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGLUN',
    },
    pagaMar: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGMAR',
    },
    pagaMie: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGMIE',
    },
    pagaJue: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGJUE',
    },
    pagaVie: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGVIE',
    },
    pagaSab: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGSAB',
    },
    pagaDom: {
      type: Sequelize.TINYINT,
      field: 'CLI_PAGDOM',
    },
    inicioPago: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DIAINI',
    },
    pagoFinal: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DIAFIN',
    },
    capitalPagado: {
      type: Sequelize.DECIMAL,
      field: 'CLI_CAPPAG',
    },
    gaceta: {
      type: Sequelize.CHAR,
      field: 'CLI_GACETA',
    },
    fechaGaceta: {
      type: Sequelize.DATE,
      field: 'CLI_GACFCH',
    },
    nombreRegistroMercantil: {
      type: Sequelize.CHAR,
      field: 'CLI_REGMER',
    },
    fechaCierre: {
      type: Sequelize.DATE,
      field: 'CLI_FCHCIE',
    },
    horaCaja: {
      type: Sequelize.CHAR,
      field: 'CLI_HORACJ',
    },
    login: {
      type: Sequelize.CHAR,
      field: 'CLI_LOGIN',
    },
    divisasTransacciones: {
      type: Sequelize.CHAR,
      field: 'CLI_CODMON',
    },
    divisasPrecioVenta: {
      type: Sequelize.CHAR,
      field: 'CLI_INVMON',
    },
    direccionFiscal1: {
      type: Sequelize.CHAR,
      field: 'CLI_FISCD1',
    },
    direccionFiscal2: {
      type: Sequelize.CHAR,
      field: 'CLI_FISCD2',
    },
    direccionFiscal3: {
      type: Sequelize.CHAR,
      field: 'CLI_FISCD3',
    },
    zonaPostal: {
      type: Sequelize.CHAR,
      field: 'CLI_ZONPOS',
    },
    apartadoPostal: {
      type: Sequelize.CHAR,
      field: 'CLI_APAPOS',
    },
    mensaje: {
      type: Sequelize.CHAR,
      field: 'CLI_MENSAJ',
    },
    horarioPago: {
      type: Sequelize.CHAR,
      field: 'CLI_HORPAG',
    },
    diasBloqueo: {
      type: Sequelize.DECIMAL,
      field: 'CLI_BLOQUE',
    },
    DiasPrebloqueo: {
      type: Sequelize.DECIMAL,
      field: 'CLI_PREBLO',
    },
    mora: {
      type: Sequelize.DECIMAL,
      field: 'CLI_MORA',
    },
    intereses: {
      type: Sequelize.DECIMAL,
      field: 'CLI_INTERS',
    },
    banco: {
      type: Sequelize.CHAR,
      field: 'CLI_BANNOM',
    },
    potencial: {
      type: Sequelize.CHAR,
      field: 'CLI_POTENC',
    },
    fechaContribucion: {
      type: Sequelize.DATE,
      field: 'CLI_REGFCH',
    },
    sigla: {
      type: Sequelize.CHAR,
      field: 'CLI_SIGLA',
    },
    cantidadDecimales: {
      type: Sequelize.DECIMAL,
      field: 'CLI_DECIMA',
    },
    tipoCliente: {
      type: Sequelize.CHAR,
      field: 'CLI_TIPCLI',
    },
    modoRecepcionFactura: {
      type: Sequelize.CHAR,
      field: 'CLI_MODREC',
    },
    facturaDom: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECDOM',
    },
    facturaVie: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECVIE',
    },
    facturaMie: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECMIE',
    },
    faturaLun: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECLUN',
    },
    detalleHorario: {
      type: Sequelize.CHAR,
      field: 'CLI_HORREC',
    },
    facturaSab: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECSAB',
    },
    facturaJue: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECJUE',
    },
    facturaMar: {
      type: Sequelize.TINYINT,
      field: 'CLI_RECMAR',
    },
    montoDia: {
      type: Sequelize.DECIMAL,
      field: 'CLI_MTODIA',
    },
    montoLimite: {
      type: Sequelize.DECIMAL,
      field: 'CLI_MTOLIM',
    },
    muestraPaciente: {
      type: Sequelize.CHAR,
      field: 'CLI_IMPPAC',
    },
    agrupaItems: {
      type: Sequelize.CHAR,
      field: 'CLI_AGRITE',
    },
    preciosRegulados: {
      type: Sequelize.CHAR,
      field: 'CLI_REGULA',
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
