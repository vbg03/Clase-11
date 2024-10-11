export const Operaciones = (numeros, setNumeros) => {
    const { numero1, numero2 } = numeros;

    const handleChange = (e) => {
        const value = e.target.value === '' ? 0 : parseFloat(e.target.value);
        setNumeros({
            ...numeros,
            [e.target.name]: value
        });
    };

    const suma = () => numero1 + numero2;
    const resta = () => numero1 - numero2;
    const division = () => (numero2 !== 0 ? numero1 / numero2 : 'No se puede dividir entre 0');
    const multiplicacion = () => numero1 * numero2;

    return { handleChange, suma, resta, division, multiplicacion, numero1, numero2 };
};
