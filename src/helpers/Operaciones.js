export const Operaciones = (numeros, setNumeros)=>{
    const {numero1, numero2} = numeros;
    const handleChange=(e)=>{
        setNumeros({
            ...numeros,
            [e.target.name]:parseFloat([e.target.value])
        });
        
    }
    const suma =()=> numero1 + numero2;
    return{handleChange, suma, numero1, numero2}
}