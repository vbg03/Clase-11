import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';
import { Operaciones } from '../helpers/Operaciones';

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });

    const { handleChange, suma, numero1, numero2 } = Operaciones(numeros, setNumeros);

    return (
        <>
            <label htmlFor="">
                numero 1: 
                <input name='numero1' value={numero1} onChange={handleChange} type="number" />
            </label>
            <label htmlFor="">
                numero 2: 
                <input name='numero2' value={numero2} onChange={handleChange} type="number" />
            </label>
            <Resultado operacion={suma} calculo={suma()}/>
        </>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput