//2.6 (Refatorando a aplicação)  O código HTML que define cada pedido éessencialmente igual aos demais, 
//a menos do conteúdo. Trata-se de um bloco decódigo que desejamos reutilizar em diferentes partes da aplicação. 
// Esse tipo decódigo deve ser definido como um componente React à parte.

import React from 'react'

const Pedido = (props) => {   
    return (
        //recorte a definição do primeiro pedido existente no arquivo index.js e cole no arquivo Pedido.js
        <div className="card my-2">
            {/*O mecanismo props) Embora tenhamos refatorado a aplicação criando umcomponente próprio para 
            a representação de pedidos, ele ainda não é realmentereutilizável. Afinal, seu conteúdo, como nome, 
            descrição e ícone referentes aopedido, está fixo. Precisamos de um mecanismo que viabilize a 
            especificação doconteúdo a ser utilizado pelo componente no momento em que o utilizamos.Estamos 
            falando do mecanismo conhecido como props. Trata-se de um mecanismoextremamente simples: quando 
            utilizamos um componente por meio de sua tag,especificamos pares chave/valor que ele poderá utilizar 
            internamente. Essas são assuas propriedades. Daí o nome. Funciona exatamente da mesma forma como a 
            passagem de argumentos para uma função, quando a colocamos em execução. Osvalores especificados são 
            “empacotados” em um objeto JSON que pode seracessado pelo componente. */}

            {/*Com isso, foi alterado os 3 campos de valores fixos que tinha e substituído pelo props: data, icone, titulo e descrição*/}
            <div className="card-header text-muted">{props.data}</div>
            <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                    <i className={props.icone}></i>
                </div>
                <div className="flex-grow-1 ms-3 border">
                    <h4 className="text-center">{props.titulo}</h4>
                    <p className="text-center">{props.descricao}</p>
                </div>
            </div>
        </div> 
    )
}
export default Pedido;