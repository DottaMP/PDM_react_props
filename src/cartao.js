//Nova refatoração: componente Cartao)  “Cartões” são elementos muitoutilizados por 
// aplicações para exibir conteúdo. Podemos promover ainda mais o nívelde reusabilidade 
// de nossos componentes criando um componente que seja capazde representar cartões de 
// maneira independente, não estando atrelado à exibiçãode pedidos. Para fazê-lo, 
// crie um arquivo chamado Cartao.js na pasta src.

import React from 'react'

const Cartao = (props) => {   
    return (
        <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">{props.cabecalho}</div>
            {/* corpo do cartão */}
            <div className="card-body">{props.children}</div>
        </div>   
    )
}
export default Cartao;