import React, { useState } from 'react';
import { asuntos } from '../../helpers/inputsDatos';

const CajaAsunto = () => {
    const [misAsuntos, setMisAsuntos] = useState(asuntos);

    return (
        <div className="caja-asunto">
            <div className="caja-label">
                <label> Asunto </label>
            </div>
            <div className="caja-select">
                <select name="asunto" id="select-asunto" required>
                    <option value={''} disabled selected>
                        Seleccione un Asunto
                    </option>

                    {misAsuntos.map((asunto, index) => {
                        return (
                            <option value={asunto} key={index}>
                                {asunto}
                            </option>
                        );
                    })}
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z" />
                </svg>
            </div>
        </div>
    );
};

export default CajaAsunto;
