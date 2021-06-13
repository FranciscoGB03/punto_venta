import {RiHomeGearLine,RiAdminFill} from 'react-icons/ri';
import {FcRules} from "react-icons/fc";
import {BsBook, BsGearWideConnected, BsQuestionSquare, BsGear, BsPencilSquare,BsFileEarmarkCheck} from "react-icons/bs";
import {ImUserTie, ImLab} from 'react-icons/im';
import {AiOutlineLineChart, AiOutlineFileSearch, AiOutlineSecurityScan} from 'react-icons/ai';
import {GrConfigure} from 'react-icons/gr';
import {VscGroupByRefType,VscGraph} from 'react-icons/vsc';
import {BiDevices,BiColumns} from "react-icons/bi";
import {FaReact, FaThermometerThreeQuarters, FaThermometer} from 'react-icons/fa';
import {MdDeviceHub,MdBubbleChart} from 'react-icons/md';
import {IoStatsChart} from 'react-icons/io5';
import {SiGooglesheets} from 'react-icons/si'
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {GoChecklist} from 'react-icons/go';

/**
 * Estructura de Menu
 * keyLang: Key a cargar en el lang
 * icono: Debe ser importado de react icons
 * permiso: permiso
 * publico: true| false hace referencia de si es publica o no la opción del navbar
 * tipo: navLink | simple | dropdown
 * nlOptions: Propiedades de navlink (to/)
 * onClick: Sólo funciona para tipo simple
 * separador:true|false coloca una linea separadora entre las opciones
 */

export const ITEMS_IZQUIERDA = {
    menus: [
        {
            keyLang: 'navbar:puntosMuestreo',
            icono: MdBubbleChart,
            permiso: 'navbar.ver_puntos_muestreo',
            tipo: 'navlink',
            publico: false,
            nlOptions: {to: '/puntosMuestreo'}
        },
        {
            keyLang: 'navbar:ca1',
            icono: FaThermometerThreeQuarters,
            permiso: 'navbar.ver_ca1',
            tipo: 'navlink',
            publico: false,
            nlOptions: {to: '/hojaAnalisis/CA1'}
        },
        {
            keyLang: 'navbar:ca2',
            icono: FaThermometer,
            permiso: 'navbar.ver_ca2',
            tipo: 'navlink',
            publico: false,
            nlOptions: {to: '/hojaAnalisis/CA2'}
        },
        {
            keyLang: 'navbar:solicitudes',
            icono: SiGooglesheets,
            permiso: 'navbar.ver_solicitudes',
            tipo: 'navlink',
            publico: false,
            nlOptions: {to: '/solicitudes'}
        }
    ]
};
export const ITEMS_DERECHA = {
    menus: [
        {
            keyLang: 'navbar:reportes',
            icono: HiOutlineDocumentReport,
            permiso: 'navbar.ver_reportes',
            publico: false,
            tipo: 'dropdown',
            navlinks: [
                {
                    keyLang: 'navbar:calificaciones',
                    to: "/reportes/calificaciones",
                    icono: BsFileEarmarkCheck,
                    permiso: 'navbar.ver_calificaciones',
                    publico: false
                },
                {
                    keyLang: 'navbar:verificaciones',
                    to: "/reportes/verificacionesMonitoreo",
                    icono: GoChecklist,
                    permiso: 'navbar.ver_verificaciones_monitoreo',
                    publico: false
                },
                {
                    keyLang: 'navbar:reporteAnual',
                    to: "/reportes/anual",
                    icono:VscGraph,
                    permiso: 'navbar.ver_reporte_anual',
                    publico: false
                }]
        },
        {
            keyLang: 'admin:admin',
            icono: RiAdminFill,
            permiso: 'navbar.ver_admin',
            publico: false,
            tipo: 'dropdown',
            navlinks: [
                {
                    keyLang: 'navbar:analisisColumnas',
                    to: "/admin/analisisColumnas",
                    icono: BiColumns,
                    permiso: 'navbar.ver_analisis_columnas',
                    publico: false
                },
                {
                    keyLang: 'admin:especificacionEquipo',
                    to: "/admin/especificacionEquipo",
                    icono: MdDeviceHub,
                    permiso: 'navbar.ver_especificacion_admin',
                    publico: false
                },
                {
                    keyLang: 'admin:configuracion',
                    to: "/admin/configuracion",
                    icono: RiHomeGearLine,
                    permiso: 'navbar.ver_configuracion_admin',
                    publico: false
                },
                {
                    keyLang: 'admin:permisos',
                    to: "/admin/permisos",
                    icono: FcRules,
                    permiso: 'navbar.ver_permisos_admin',
                    publico: false
                }
            ]
        },
        {
            keyLang: 'catalogos:catalogos',
            icono: BsBook,
            permiso: 'navbar.ver_catalogos',
            tipo: 'dropdown',
            publico: false,
            navlinks: [
                {
                    keyLang: 'catalogos:tituloTipoParametro',
                    to: "/catalogos/tipoParametro",
                    icono: AiOutlineLineChart,
                    permiso: 'navbar.ver_tipo_parametro',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloParametro',
                    to: "/catalogos/parametro",
                    icono: IoStatsChart,
                    permiso: 'navbar.ver_parametro',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tipoPM',
                    to: "/catalogos/tipoPM",
                    icono: MdBubbleChart,
                    permiso: 'navbar.ver_tipo_pm',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloTipoMuestra',
                    to: "/catalogos/tipoMuestra",
                    icono: ImLab,
                    permiso: 'navbar.ver_tipo_muestra',
                    publico: false
                },
                {
                    keyLang: 'catalogos:areaCA',
                    to: "/catalogos/areaCA",
                    icono: FaReact,
                    permiso: 'navbar.ver_area_ca',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloAnalisis',
                    to: "/catalogos/analisis",
                    icono: AiOutlineFileSearch,
                    permiso: 'navbar.ver_analisis',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tipoEquipo',
                    to: "/catalogos/tipoEquipo",
                    icono: VscGroupByRefType,
                    permiso: 'navbar.ver_tipo_equipo',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloEquipo',
                    to: "/catalogos/equipo",
                    icono: BiDevices,
                    permiso: 'navbar.ver_equipo',
                    publico: false,
                    separador: true
                },
                {
                    keyLang: 'catalogos:pregunta',
                    to: "/catalogos/pregunta",
                    icono: BsQuestionSquare,
                    permiso: 'navbar.ver_pregunta',
                    publico: false
                },
                {
                    keyLang: 'catalogos:motivo',
                    to: "/catalogos/motivo",
                    icono: BsPencilSquare,
                    permiso: 'navbar.ver_motivo',
                    publico: false,
                    separador: true
                },
                {
                    keyLang: 'catalogos:tituloTipoConfiguracion',
                    to: "/catalogos/tipoConfiguracion",
                    icono: BsGear,
                    permiso: 'navbar.ver_tipo_configuracion',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloConfiguracion',
                    to: "/catalogos/configuraciones",
                    icono: GrConfigure,
                    permiso: 'navbar.ver_configuraciones',
                    publico: false,
                    separador: true
                },
                {
                    keyLang: 'catalogos:roles',
                    to: "/catalogos/rol",
                    icono: ImUserTie,
                    permiso: 'navbar.ver_roles',
                    publico: false
                },
                {
                    keyLang: 'catalogos:tituloSeccionPermisos',
                    to: "/catalogos/seccionPermiso",
                    icono: BsGearWideConnected,
                    permiso: 'navbar.ver_seccion_permisos',
                    publico: false
                },
                {
                    keyLang: 'catalogos:permisos',
                    to: "/catalogos/permiso",
                    icono: AiOutlineSecurityScan,
                    permiso: 'navbar.ver_permiso',
                    publico: false
                }
            ]
        }
    ]
    // menus: [
    //     {
    //         keyLang: 'general.catalogos',
    //         icono: FaList,
    //         visible: true,
    //         tipo: 'dropdown',
    //         navlinks: [
    //             {keyLang: 'nose.1', to: "reportes/uno"},
    //             {keyLang: 'nose.1', to: "reportes/dos", icono: FaList},
    //             {keyLang: 'nose.1', to: "reportes/tres"},
    //             {keyLang: 'nose.1', to: "reportes/cuatro"}
    //         ]
    //     },
    //     {
    //         keyLang: 'general.admin',
    //         icono: FaList,
    //         visible: true,
    //         tipo: 'dropdown',
    //         navlinks: [
    //             {keyLang: 'nose.1', to: "reportes/uno"},
    //             {keyLang: 'nose.1', to: "reportes/dos", icono: FaList},
    //             {keyLang: 'nose.1', to: "reportes/tres"},
    //             {keyLang: 'nose.1', to: "reportes/cuatro"}
    //         ]
    //     },
    //     {
    //         keyLang: 'general.jobs',
    //         icono: FaList,
    //         visible: true,
    //         tipo: 'navlink',
    //         nlOptions: {to: 'jobs'}
    //     },
    // ]
};
