import CajaLabelRegistro from './CajaLabelRegistro';
import { useState } from 'react';
import { labelsRegistro2 } from '../../helpers/inputsDatos';

const CajaInputs2 = () => {
    const [labels, setLabels] = useState(labelsRegistro2);

    return (
        <>
            <div className="caja-inputs-2" id="caja-inputs-2">
                {labels.map((label, index) => {
                    return <CajaLabelRegistro key={index} label={label} />;
                })}
            </div>
        </>
    );
};

export default CajaInputs2;
