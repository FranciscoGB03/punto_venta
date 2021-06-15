import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto, mostrarErrorCargar} from "./responses";

const ruta_base = "departments/";
export const consultaDepartamentos = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getDepartments`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaDepartamento = (departamento,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}saveDepartment`,departamento)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}