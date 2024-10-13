import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { Operaciones } from '../helpers/Operaciones';

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });

    const { handleChange, suma, resta, division, multiplicacion, numero1, numero2 } = Operaciones(numeros, setNumeros);

    return (
        <>
            <div>
                <label htmlFor="numero1">
                    <strong>Número 1:</strong>
                    <input name="numero1" value={numero1} onChange={handleChange} type="number" />
                </label>
            </div>

            <div>
                <label htmlFor="numero2">
                    <strong>Número 2:</strong>
                    <input name="numero2" value={numero2} onChange={handleChange} type="number" />
                </label>
            </div>

            <div className='resultados'>
                <Resultado operacion="Suma" calculo={suma()} />
                <Resultado operacion="Resta" calculo={resta()} />
                <Resultado operacion="Multiplicación" calculo={multiplicacion()} />
                <Resultado operacion="División" calculo={division()} />
            </div>
        </>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string
};

export default NumberInput;
