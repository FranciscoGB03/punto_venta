import React, {useState, useEffect} from 'react';
import {noop} from "../../../services/generalService";
import i18next from "i18next";
import filtrarArreglo from "../../../services/filterService";

const ModalTrabajadores = ({trabajadores_all = [], onSelect = noop}) => {
    const [buscador, setBuscador] = useState('');
    const [trabajadores, setTrabajadores] = useState(trabajadores_all);

    useEffect(() => {
        setTrabajadores(filtrarArreglo(trabajadores_all, {fullName: buscador}));
    }, [trabajadores_all, buscador]);
    return (
        <div className="modal fade" id="modalTrabajadores" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{i18next.t('general:seleccioneTrabajador')}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className='form-control' placeholder={i18next.t('general.buscador')}
                               onChange={e => setBuscador(e.target.value)}
                               value={buscador}/>
                        <div className="list-group">
                            {trabajadores.map((trab, idx) =>
                                <button type="button" key={idx}
                                        onClick={() => onSelect(trab)}
                                        className="list-group-item list-group-item-action">
                                    {trab?.fullName}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalTrabajadores;
