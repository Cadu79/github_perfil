import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome]);

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);
            
            return evento.target.value;
        })
    }

    const renderizResultado = () => {
        const soma =materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado.</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {renderizResultado()}
        </form>
    )
}

export default Formulario