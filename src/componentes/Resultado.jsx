import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({ operacion, calculo }) => {
    return (
        <>
            <p className='resultados'><strong>{operacion}:</strong> <span>{calculo}</span></p>
        </>
    );
};

Resultado.propTypes = {
    operacion: PropTypes.string.isRequired,
    calculo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Resultado;
