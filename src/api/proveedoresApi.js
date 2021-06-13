import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto, mostrarErrorCargar} from "./responses";

const ruta_base = "hojaAnalisis/";

export const bloquear = (analisis_dia_id, mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}bloquear`, {analisis_dia_id})
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}