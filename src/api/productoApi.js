import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto, mostrarErrorCargar} from "./responses";

const ruta_base = "product/";
export const consultaPresentacion = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getPresentation`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaPresentacion = (presentacion,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}savePresentation`,presentacion)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const consultaImpuesto = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getTax`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaImpuesto = (impuesto,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}saveTax`,impuesto)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const consultaProducto = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getProduct`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaProducto = (producto,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}saveProduct`,producto)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
