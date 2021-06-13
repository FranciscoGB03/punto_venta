import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto,mostrarErrorCargar} from "./responses";

const ruta_base = "admin/";
export const guardarRolUsuarios = (rol) => {
    return API.post(`${ruta_base}guardarRolUsuarios`, {rol: rol})
        .then(res => {
            guardadoCorrecto();
            return res.data;
        })
        .catch(error => mostrarErrorCargar(error));
};

export const guardarRolPermisos = (rol) => {
    return API.post(`${ruta_base}guardarRolPermisos`, {rol: rol})
        .then(res => {
            guardadoCorrecto();
            return res.data;
        })
        .catch(error => mostrarErrorCargar(error));
};
export const guardaEquipoAnalisis = (equipo) => {
    return API.post(`${ruta_base}guardarRelsEquipoAnalisis`, {equipo})
        .then(res => {
            guardadoCorrecto();
            return res.data;
        })
        .catch(error => mostrarErrorCargar(error));
};
export const guardaEspecsEquipo=(equipo)=>{
    return API.post(`${ruta_base}guardarEspecsEquipo`, {equipo})
        .then(res => {
            guardadoCorrecto();
            return res.data;
        }).catch(error => mostrarErrorCargar(error));
}
export const guardaColumna = (columna, mostrar_cargando = true, mostrar_cargado = true, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}guardarColumna`, {columna})
        .then(res => mostrar_cargado && returnGuardadoCorrecto(res.data))
        .catch((err) => mostrar_error && mostrarErrorGuardar(err));
};