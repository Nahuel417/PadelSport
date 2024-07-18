const CajaLabelRegistro = ({ label }) => {
    return (
        <>
            <div className="caja-registro" id="caja-registro">
                <div>{label !== 'Avatar' ? <label> {label} *</label> : <label> {label} </label>}</div>

                {label === 'Avatar' ? (
                    <>
                        <input type="file" name={label} className={label} required />
                        <span className="feedback-negativo" id="feedback-negativo"></span>
                    </>
                ) : label === 'Fecha de Nacimiento' ? (
                    <>
                        <div className="caja-fecha">
                            <input type="date" name="fecha" className="fecha" required />
                            <span className="feedback-negativo" id="feedback-negativo"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z" />
                            </svg>
                        </div>
                    </>
                ) : (
                    <>
                        <input type="text" name={label} className={label} placeholder={`Ingrese su ${label}`} required />
                        <span className="feedback-negativo" id="feedback-negativo"></span>
                    </>
                )}
            </div>
        </>
    );
};

export default CajaLabelRegistro;
