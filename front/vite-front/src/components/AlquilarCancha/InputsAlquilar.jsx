import { useState } from 'react';
import { labels } from '../../helpers/inputsDatos';
import CajaInputsDatos from './CajaInputsDatos';
import CajaAsunto from './CajaAsunto';

const InputsAlquilar = () => {
    const [label, setLabel] = useState(labels);

    let id = 0;

    return (
        <div className="caja-inputs" id="caja-inputs">
            <div className="caja-asunto">
                <CajaAsunto />
            </div>

            <div className="caja-datos" id="caja-datos">
                {label.map((label) => {
                    return <CajaInputsDatos key={id++} label={label} />;
                })}
            </div>

            <div className="caja-boton" id="caja-boton">
                <button type="submit">Alquilar Cancha</button>
            </div>
        </div>
    );
};

export default InputsAlquilar;
