import { useState } from 'react'
import * as C from './style'

export const Store = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <C.Container>
            <form action="">
                <h2>Formulário teste</h2>
                <input type="text" placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Digite seu sobrenome' value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="number" placeholder='Digite sua idade' value={age} onChange={e => setAge(parseInt(e.target.value))} />
            </form>
            <div>
                Olá {`${name} ${lastName}, `}tudo bem? <br />
                Você tem {age} anos de idade!
            </div>
        </C.Container>
    )
}