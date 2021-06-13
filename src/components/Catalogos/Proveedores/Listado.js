import React, {useState, useEffect} from 'react';
import {ordenarArrPorKey} from '../../../services/sortService';
import i18next from "i18next";
import BotonBuscar from "../../Template/BotonBuscar";
import BotonCopiarPortapapeles from "../../Template/BotonCopiarPortapapeles";
import filtrarArreglo from "../../../services/filterService";
import BotonNuevoRegistro from "../../Template/BotonNuevoRegistro";
import BotonEditar from "../../Template/BotonEditar";
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';

const Listado = ({registrosAll, setSeleccionado, onEliminar}) => {
    //|------Hooks/Constantes------|//
    const [filtro, setFiltro] = useState({});
    const [sort, setSort] = useState({key: 'id', order: 'asc'});
    const [registros, setRegistros] = useState(registrosAll);
    const [ver_buscadores, setVerBuscadores] = useState(false);
    //|------useEffect------|//
    useEffect(() => {
        filtrarRegistros();
    }, [registrosAll, filtro]);
    useEffect(() => {
        ordenarRegistros();
    }, [sort]);
    //|------GUI------|//
    const filtrarRegistros = () => setRegistros(ordenarArrPorKey(filtrarArreglo(registrosAll, filtro), sort.key, sort.order));
    const ordenarRegistros = () => setRegistros(ordenarArrPorKey(registros, sort.key, sort.order));
    return (
        <div className="card d-flex mx-4 border-tabla z-depth-2 animated bounceInUp">
            <div className=" card-header d-flex justify-content-between text-center py-0">
                <h5 className="text-center text-titulo-tabla txts_gray pt-2">
                    <i className="py-2 px-2">{i18next.t('catalogos:registrosExistentes')}</i>
                </h5>
                <div className='d-flex justify-content-end text-titulo-tabla mt-2'>
                    <BotonBuscar ver_buscadores={ver_buscadores} setVerBuscadores={setVerBuscadores}/>
                    <BotonCopiarPortapapeles div_tabla="div_tabla"/>
                    <BotonNuevoRegistro onNuevoRegistro={() => setSeleccionado({})}/>
                </div>
            </div>
            <div className="card-body p-0">
                <div id="div_tabla" className="table-responsive">
                    <table className=" table table-condensed table-hover ">
                        <TheadTitulos sort={sort} setSort={setSort}/>
                        {ver_buscadores && <TheadBuscador filtro={filtro} setFiltro={setFiltro}/>}
                        <tbody className="text-subtitulos">
                        {(registros || []).map((reg, idx) => <tr key={idx}>
                            <td>{reg.nombre}</td>
                            <td>{reg.rfc}</td>
                            <td>{reg.razonsocial}</td>
                            <td>{reg.contacto}</td>
                            <td>{reg.emailcontacto}</td>
                            <td>{reg.telefonocontacto}</td>
                            <td>{reg.estatus===1?i18next.t('catalogos:activo'):i18next.t('catalogos:inactivo')}</td>
                            <td className='d-flex justify-content-end flex-nowrap'>
                                <BotonEditar onClick={() => setSeleccionado(reg)}/>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
//|------Subcomponentes------|//
const TheadTitulos = ({sort, setSort}) => {
    const handleSort = key => {
        if (key === sort.key)
            setSort({...sort, order: sort.order === 'asc' ? 'desc' : 'asc'});
        else
            setSort({key, order: 'asc'});
    };
    return (
        <thead className=''>
        <tr>
            <th className='text-center cursor'
                onClick={() => handleSort('nombre')}>
                <IconosSort key_sort={'nombre'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:nombre')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('rfc')}>
                <IconosSort key_sort={'rfc'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:rfc')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('razonsocial')}>
                <IconosSort key_sort={'razonsocial'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:razonSocial')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('contacto')}>
                <IconosSort key_sort={'contacto'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:contacto')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('emailcontacto')}>
                <IconosSort key_sort={'emailcontacto'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:email')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('telefonocontacto')}>
                <IconosSort key_sort={'telefonocontacto'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:telefono')}
            </th>
            <th className='text-center cursor'
                onClick={() => handleSort('estatus')}>
                <IconosSort key_sort={'estatus'} key_actual={sort.key} order={sort.order}/>
                {i18next.t('catalogos:estatus')}
            </th>
            <th></th>
        </tr>
        </thead>
    );
}
const TheadBuscador = ({filtro, setFiltro}) => {
    return (
        <thead className=''>
        <tr>
            <th className='py-1'>
                <input className='form-control form-control-sm' value={filtro.nombre || ""}
                       placeholder={i18next.t('catalogos:buscar')}
                       onChange={(e) => setFiltro({...filtro, nombre: e.target.value})}/>
            </th>
            <th className='py-1'>
                <input className='form-control form-control-sm' value={filtro.rfc || ""}
                       placeholder={i18next.t('catalogos:buscar')}
                       onChange={(e) => setFiltro({...filtro, rfc: e.target.value})}/>
            </th>
            <th className='py-1'>
                <input className='form-control form-control-sm' value={filtro.razonsocial || ""}
                       placeholder={i18next.t('catalogos:buscar')}
                       onChange={(e) => setFiltro({...filtro, razonsocial: e.target.value})}/>
            </th>
            <th className='py-1'>
                <input className='form-control form-control-sm' value={filtro.contacto || ""}
                       placeholder={i18next.t('catalogos:buscar')}
                       onChange={(e) => setFiltro({...filtro, contacto: e.target.value})}/>
            </th>
            <th></th>
        </tr>
        </thead>);
}

const IconosSort = ({key_actual, key_sort, order}) => {
    return (<React.Fragment>
        {key_sort === key_actual && order === 'asc' && <FaChevronUp/>}
        {key_sort === key_actual && order === 'desc' && <FaChevronDown/>}
    </React.Fragment>);
}
export default Listado;