import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({operacion, calculo}) => {
  return (
    <>
    <br />
    <span>{operacion}:{calculo}</span>
    </>
  )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado