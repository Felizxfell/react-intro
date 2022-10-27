import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow })
{
    if (show)
    {
        return (
            <div className='change-conainer'>
                <div className='change-box'>
                    <p>Hubo cambios</p>
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };