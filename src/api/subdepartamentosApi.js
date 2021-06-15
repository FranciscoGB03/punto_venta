import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto, mostrarErrorCargar} from "./responses";

const ruta_base = "subdepartments/";
export const consultaSubdepartamentos = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getSubdepartments`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaSubdepartamento = (departamento,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}saveSubdepartment`,departamento)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}