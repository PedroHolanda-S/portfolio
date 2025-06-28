import { useState } from 'react'
import './BotaoMudar.css'
import { use } from 'react'

function BotaoMudar() {
    //let valor = 12

    let [valor, setValor] = useState(20)
    function adicionar(){
        setValor(valor + 1)
        console.log(valor)
        // valor = valor + 1
    }
    function diminuir(){
        setValor(valor - 1)
        console.log(valor)
    }

    

    return (
        <>
            <h1>sybau lil bro ts pmo icl 🥀, go get a j*b or sh*wer</h1>
            <p>O valor agora é : {valor}</p>
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )

}

export default BotaoMudar