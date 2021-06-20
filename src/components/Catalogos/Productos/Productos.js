import React, {useEffect, useState} from 'react'
import Template from '../../Template/Template';
import Titulo from '../../Template/Titulo';
import Listado from './Listado';
import Detalle from './Detalle';
import {consultaProveedores} from '../../../api/proveedoresApi';
import {consultaPresentacion} from '../../../api/productoApi';
import {consultaSubdepartamentos} from '../../../api/subdepartamentosApi';
import {consultaProducto} from '../../../api/productoApi';
import SinSesion from '../../Template/SinSesion';
import {isLogged} from '../../../services/authService';
import i18next from "i18next";
import {FaUsers} from "react-icons/fa";
import {cerrarAlert} from "../../../services/swalService";
import {noop} from "../../../services/generalService";

const Productos = () => {
    //|----------------|hooks|-----------------|//
    const [registrosAll, setRegistrosAll] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [proveedores,setProveedores]=useState([]);
    const [presentaciones,setPresentaciones]=useState([]);
    const [subdepartamentos,setSubdepartamentos]=useState([]);
    let datos=[];
    //|------UseEffects------|//
    useEffect(() => {
        cargarCatalogos();
        cargarRegistros();

    }, []);
    //|------Funciones------|//
    //|------GUI------|//
    //|------API------|//
    const onGuardar = () => {
        cargarRegistros();
        setSeleccionado(null);
    }
//|------Operaciones------|//
//|------DatosIniciales------|//
    const cargarCatalogos=()=>{
        consultaProveedores().then(res=>{
            cerrarAlert();
            setProveedores(res)
        });
        consultaPresentacion().then(res=>{
            cerrarAlert();
            setPresentaciones(res);
        });
        consultaSubdepartamentos().then(res=>{
            cerrarAlert();
            setSubdepartamentos(res);
        })
    }
    const cargarRegistros = () => {
        consultaProducto().then(res=>{
            cerrarAlert();
            setRegistrosAll(res);
        })
    };
//|------Render------|//
    return (
        <Template>
            {isLogged() ?
                <div>
                    <div className="container">
                        <Titulo titulo={i18next.t('catalogos:tituloProductos')} icono={FaUsers}/>
                    </div>
                    <div className=" d-flex justify-content-center flex-wrap">
                        <div>
                            <Listado registrosAll={registrosAll} setSeleccionado={setSeleccionado}/>
                        </div>
                        <div>
                            {seleccionado && <Detalle seleccionado={seleccionado}
                                                      onGuardar={onGuardar}
                                                      presentaciones={presentaciones}
                                                      proveedores={proveedores}
                                                      subdepartamentos={subdepartamentos}/>}
                        </div>
                    </div>
                </div> : <SinSesion/>
            }
        </Template>
    );
}
export default Productos;