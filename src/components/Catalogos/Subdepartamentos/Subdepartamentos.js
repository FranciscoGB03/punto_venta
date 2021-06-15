import React, {useEffect, useState} from 'react'
import Template from '../../Template/Template';
import Titulo from '../../Template/Titulo';
import Listado from './Listado';
import Detalle from './Detalle';
import {consultaDepartamentos} from '../../../api/departamentosApi';
import {consultaSubdepartamentos} from '../../../api/subdepartamentosApi';
import SinSesion from '../../Template/SinSesion';
import {isLogged} from '../../../services/authService';
import i18next from "i18next";
import {FaUsers} from "react-icons/fa";
import {cerrarAlert} from "../../../services/swalService";
import {noop} from "../../../services/generalService";

const Subdepartamentos = () => {
    //|----------------|hooks|-----------------|//
    const [departamentos,setDepartamentos]=useState([]);
    const [registrosAll, setRegistrosAll] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    //|------UseEffects------|//
    useEffect(() => cargarRegistros(), []);
    //|------Funciones------|//
    //|------GUI------|//
    //|------API------|//
    const onGuardar = () => {
        cargarRegistros();
        setSeleccionado({estatus:{id:''}});
    }
//|------Operaciones------|//
//|------DatosIniciales------|//
    const cargarRegistros = () => {
        consultaDepartamentos().then(res => {
            cerrarAlert();
            setDepartamentos(res);
        }).catch(noop());
        consultaSubdepartamentos().then(res=>{
            cerrarAlert();
            setRegistrosAll(res);
        }).catch(noop());
    };
//|------Render------|//
    return (
        <Template>
            {isLogged() ?
                <div>
                    <div className="container">
                        <Titulo titulo={i18next.t('catalogos:tituloSubdepartamentos')} icono={FaUsers}/>
                    </div>
                    <div className=" d-flex justify-content-center flex-wrap">
                        <div>
                            <Listado registrosAll={registrosAll} setSeleccionado={setSeleccionado}/>
                        </div>
                        <div>
                            {seleccionado && <Detalle seleccionado={seleccionado} catalogo={departamentos} onGuardar={onGuardar}/>}
                        </div>
                    </div>
                </div> : <SinSesion/>
            }
        </Template>
    );
}
export default Subdepartamentos;