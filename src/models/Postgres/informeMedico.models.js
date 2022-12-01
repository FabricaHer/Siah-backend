import Sequelize from 'sequelize';
import { Postgres } from '../../database/databasePostgres';
import { Consulta } from './consulta.models';
export const Informe_medico_hce = Postgres.define ('informe_medico_hce', {
    informe_medico_hce_id:{
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'informe_medico_hce_id',
    },
    consulta_id2:{
        type: Sequelize.UUID,
        field: 'consulta_id',
    },
    diagnostico_cie_id:{
        type: Sequelize.UUID,
        field: 'diagnostico_cie_id',
    },
    diagnostico_egreso:{
        type: Sequelize.UUID,
        field: 'diagnostico_egreso',
    },
    imagenes_informe_id:{
        type: Sequelize.UUID,
        field: 'imagenes_informe_id',
    },
    tipo_de_informe_id:{
        type: Sequelize.UUID,
        field: 'tipo_de_informe_id',
    },
    cuerpo_informe:{
        type: Sequelize.STRING,
        field: 'cuerpo_informe',
    },
    titulo:{
        type: Sequelize.STRING,
        field: 'titulo',
    },
    tipo_beneficiario:{
        type: Sequelize.STRING,
        field: 'tipo_beneficiario',
    },
    conclusion:{
        type: Sequelize.STRING,
        field: 'conclusion',
    },
    fecha:{
        type: Sequelize.TIME,
        field: 'fecha',
    },
    imprimir_antecedentes:{
        type: Sequelize.BOOLEAN,
        field: 'imprimir_antecedentes',
    },
    imprimir_diagnostico_ingreso:{
        type: Sequelize.BOOLEAN,
        field: 'imprimir_diagnostico_ingreso',
    },
    imprimir_diagnostico_egreso:{
        type: Sequelize.BOOLEAN,
        field: 'imprimir_diagnostico_egreso',
    },
    examen_fisico:{
        type: Sequelize.BOOLEAN,
        field: 'examen_fisico',
    },
    imprimir_ultima_evolucion:{
        type: Sequelize.BOOLEAN,
        field: 'imprimir_ultima_evolucion',
    },
    imprimir_fecha:{
        type: Sequelize.BOOLEAN,
        field:'imprimir_fecha',
    },
    activo:{
        type: Sequelize.BOOLEAN,
        field: 'activo',
    },
}, {
schema: 'hce',
timestamps: false,
freezeTableName: true
});

Consulta.hasMany(Informe_medico_hce, {foreignKey: 'consulta_id2'})
Informe_medico_hce.belongsTo(Consulta, {foreignKey: 'consulta_id2', targetKey: 'consulta_id'})