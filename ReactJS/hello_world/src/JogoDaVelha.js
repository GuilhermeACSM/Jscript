import { useState } from "react";

function Quadrado({quadrado, handleClick}) {
    return (
        <button class="quadrado" onClick={handleClick}>{quadrado}</button>
    )
}

function Tabuleiro({vezDoX, quadrados, handleClick}) {
    
    const vencedor = verificadorVencedor(quadrados)
    let mensagem 

    if(vencedor) {
        mensagem = `O vencedor é: ${vencedor}`
    } else {
        mensagem = `Vez do ${vezDoX ? 'X' : 'O'}`
    }

    if(vezDoX) {
        mensagem = 'Vez do X'
    } else {
        mensagem = 'Vez do O'
    }
    
    return(
        <>
            <h2>{mensagem}</h2>
            <div class="pai-linhas">
                <div class="linha">
                    <Quadrado quadrado={quadrados[0]} handleClick={() => handleClick(0)}/>
                    <Quadrado quadrado={quadrados[1]} handleClick={() => handleClick(1)}/>
                    <Quadrado quadrado={quadrados[2]} handleClick={() => handleClick(2)}/>
                </div>
                <div class="linha">
                    <Quadrado quadrado={quadrados[3]} handleClick={() => handleClick(3)}/>
                    <Quadrado quadrado={quadrados[4]} handleClick={() => handleClick(4)}/>
                    <Quadrado quadrado={quadrados[5]} handleClick={() => handleClick(5)}/>
                </div>
                <div class="linha">
                    <Quadrado quadrado={quadrados[6]} handleClick={() => handleClick(6)}/>
                    <Quadrado quadrado={quadrados[7]} handleClick={() => handleClick(7)}/>
                    <Quadrado quadrado={quadrados[8]} handleClick={() => handleClick(8)}/>
                </div>
            </div>
        </>
    )
}

function verificadorVencedor(quadrados) {
    const combinaçoesPremiadas = [
        //linhas
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
        //colunas
        [0, 3, 6]
        [1, 4, 7]
        [2, 5, 8]
        //diagonais (Principal e secundaria)
        [0, 4 , 8]
        [2, 4 , 6]
    ]


    for(let i=0; i < combinaçoesPremiadas.length; i++) {
        const [pa, pb, pc] = combinaçoesPremiadas[i]
        if(quadrados[pa] && quadrados[pa] == quadrados[pb] && quadrados[pb] == quadrados[pc]) {
            return quadrados[pa]
        }

    }
}



function Jogo() {

    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    const [vezDoX, setVezDoX] = useState(true)
    
    function handleClick(indice) {
        if(quadrados[indice]) {
            return
        }


        const novosQuadrados = quadrados.slice()
        novosQuadrados[indice] = vezDoX ? 'X' : 'O'
        setQuadrados(novosQuadrados)
        setVezDoX(!vezDoX)
    }

    function reloadGame() {
        setQuadrados(Array(9).fill(null))
        setVezDoX(true)
    }

    return(
        <div class="div-father">
            <h1>Jogo da Velha</h1>
            <Tabuleiro vezDoX={vezDoX} quadrados={quadrados} 
            handleClick={handleClick} />
            <button onClick={reloadGame}>
                reload
            </button>
        </div>
    )
}



export default Jogo;
