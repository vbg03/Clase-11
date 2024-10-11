import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({ operacion, calculo }) => {
    return (
        <>
            <br />
            <span>{operacion}: {calculo}</span>
        </>
    );
};

Resultado.propTypes = {
    operacion: PropTypes.string.isRequired,
    calculo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Resultado;
