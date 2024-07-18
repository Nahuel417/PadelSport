import { useState } from 'react';
import { labelsRegistro1 } from '../../helpers/inputsDatos';
import CajaLabelRegistro from './CajaLabelRegistro';

const CajaInputs1 = () => {
    const [labels, setLabels] = useState(labelsRegistro1);

    return (
        <>
            <div className="caja-inputs-1" id="caja-inputs-1">
                {labels.map((label, index) => {
                    return <CajaLabelRegistro key={index} label={label} />;
                })}
            </div>
        </>
    );
};

export default CajaInputs1;
