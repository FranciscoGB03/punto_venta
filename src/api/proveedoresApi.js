import API from './axios';
import {guardadoCorrecto, cargando} from "../services/swalService";
import {mostrarErrorGuardar, returnCargadoCorrecto, returnGuardadoCorrecto, mostrarErrorCargar} from "./responses";

const ruta_base = "providers/";
export const consultaProveedores = (mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.get(`${ruta_base}getProviders`)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}
export const guardaProveedor = (proveedor,mostrar_cargando = true, mostrar_cargado = false, mostrar_error = true) => {
    cargando();
    return API.post(`${ruta_base}saveProvider`,proveedor)
        .then(res => mostrar_cargado ? returnCargadoCorrecto(res.data) : res.data)
        .catch((err) => mostrar_error && mostrarErrorCargar(err));
}