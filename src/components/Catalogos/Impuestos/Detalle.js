import React, {useEffect} from 'react';
import {useState} from 'react';
import {GiSave} from 'react-icons/gi';
import Boton from "../../Template/Boton";
import {propiedadValida} from "../../../services/validatorService";
import i18next from "i18next";
import {can} from '../../../services/seguridadService';
import EsNuevoEdit from "../../Template/EsNuevoEdit";
//import {guardaGenerico} from "../../../api/catalogosApi";
import {cerrarAlert} from "../../../services/swalService";
import {noop} from "../../../services/generalService";
import Campo from "../../Template/Campo";
import Select from '../../Template/Select';
import { guardaImpuesto } from '../../../api/productoApi';
import DatePicker from 'react-datepicker';
import moment from 'moment';
const Detalle = ({seleccionado, onGuardar}) => {
    //|------Hooks/Constantes------|//
    const [registro, setRegistro] = useState(seleccionado);
    const [errores, setErrores] = useState([]);
    const estado = [
        {id: "1", nombre: i18next.t('catalogos:activo')},
        {id: "0", nombre: i18next.t('catalogos:inactivo')}
    ];
    //|------UseEffects------|//
    useEffect(() => {
        let errores_l = [];
        if (!registro.nombre)
            errores_l.push(`${i18next.t('catalogos:elCampo')}${i18next.t('catalogos:nombre')}${i18next.t('catalogos:esRequerido')}`);
        setErrores(errores_l);
    }, [registro]);
    useEffect(() => setRegistro(seleccionado), [seleccionado]);

    //|------API-------|//
    const guardarRegistro = () => {
        guardaImpuesto(registro)
            .then(res => {
                cerrarAlert();
                onGuardar(registro);
            })
            .catch(noop());
    }

    //|------Data-------|//
    const guardarDatos = e => {
        guardarRegistro();
    };

    return (
        <div className="card border-tabla z-depth-2">
            <div className="card-header d-flex justify-content-between py-0">
                <h5 className="text-center text-titulo-tabla txts_gray pt-2">
                    <i className="py-2 px-2">{i18next.t('catalogos:detalleInfo')}</i>
                </h5>
                <div className="d-flex justify-content-center text-titulo-tabla mt-2">
                    <EsNuevoEdit es_nuevo={registro.id == null}/>
                </div>
            </div>
            <div className="m-2">
                <Campo etiqueta={`${i18next.t('catalogos:nombre')}: `}
                       data="nombre"
                       containerClass="d-flex justify-content-start"
                       inputClass={`form-control form-control-sm ml-1 ${!registro.nombre ? 'is-invalid' : ''}`}
                       value={registro.nombre || ''}
                       autoFocus={true}
                       maxLength={50}
                       onChange={e => setRegistro({...registro, nombre: e.target.value})}/>
                <Campo etiqueta={`${i18next.t('catalogos:porcentaje')}: `}
                       data="porcentaje"
                       containerClass="d-flex justify-content-start mt-1"
                       inputClass={`form-control form-control-sm ml-1 ${!registro.porcentaje ? 'is-invalid' : ''}`}
                       value={registro.porcentaje || ''}
                       autoFocus={true}
                       maxLength={13}
                       onChange={e => setRegistro({...registro, porcentaje: e.target.value})}/>
                <Campo etiqueta={`${i18next.t('catalogos:cantidad')}: `}
                       data="razonsocial"
                       labelClass="text-nowrap"
                       containerClass="d-flex justify-content-start mt-1"
                       inputClass={`form-control form-control-sm ml-1 ${registro.cantidad==='' ? 'is-invalid' : ''}`}
                       value={registro.cantidad?registro.cantidad:0}
                       autoFocus={true}
                       type="number"
                       onChange={e => setRegistro({...registro, cantidad:e.target.value})}/>
                <div className="d-flex mb-2 mt-1">
                    <span className="py-0 pr-3">{i18next.t('catalogos:vigenciaInicio')}:</span>
                    <DatePicker dateFormat="dd/MM/yyyy"
                                selected={registro.vigenciaInicio?moment(registro.vigenciaInicio).toDate():''}
                                onChange={(e) => setRegistro({...registro,vigenciaInicio:e})}/>
                </div>
                <div className="d-flex mb-2 mt-1">
                    <span className="py-0 pr-3">{i18next.t('catalogos:vigenciaFin')}:</span>
                    <DatePicker dateFormat="dd/MM/yyyy"
                                selected={registro.vigenciaFin?moment(registro.vigenciaFin).toDate():''}
                                onChange={(e) => setRegistro({...registro,vigenciaFin:e})}/>
                </div>
                <div className="d-flex mb-2 mt-1">
                    <span className="py-0 pr-3">{i18next.t('catalogos:estatus')}:</span>
                    <Select onSelect={e => setRegistro({...registro, estatus: e ? e.id : ''})}
                            className={`${registro.estatus===undefined||registro.estatus==='' ? 'is-invalid' : ''}`}
                            selected={{id: registro.estatus}|| ''}
                            options={estado}
                            labelKey="nombre"/>
                </div>
                <div className="mt-3">
                    <Boton
                        key_texto={i18next.t("general:guardar")}
                        className="btn-outline-blue w-100"
                        posicion={'right'}
                        habilitado={propiedadValida(registro, 'nombre')}// && can('catalogos.guardar_rol')}
                        ejecuta={guardarDatos}>
                        <GiSave/>
                    </Boton>
                </div>
            </div>
        </div>
    );
};

export default Detalle;