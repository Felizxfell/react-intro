import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const {  show, toggleShow } = useStorageListener({ sincronize })
    if (show) {
        return (
            <div className='change-conainer'>
                <div className='change-box'>
                    <p>Parece ser que hay cambios provenientes de otra ventana, debes sincronizar tu informaci&oacute;n</p>
                    <button
                        onClick={toggleShow}
                    >
                        Actualizar información
                    </button>
                </div>
            </div>
        );
    }
    return null
}

export default ChangeAlert;