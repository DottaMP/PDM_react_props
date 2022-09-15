/*(Componente   para   Feedback)  Temos   uma   nova   funcionalidade   a   serimplementada: 
Cada pedido deve exibir botões para que o usuário possa confirmarse a entrega já ocorreu. 
Podemos, evidentemente, construir um componente Reactpara isso. Ele será um componente que 
exibe dois botões. Um servirá para que ousuário confirme a entrega e, o outro, para dizer 
que a entrega ainda nãoaconteceu. Pensando em reusabilidade, deixaremos os textos que cada 
botão exibebem como as funções que são chamadas quando clicados em aberto. Crie um arquivo
chamado Feedback.js na pasta src.*/

import React from 'react';

const Feedback = props => {    
    return (
        <div className="d-flex justify-content-evenly m-2 mt-4">
            <button type="button" onClick={props.funcaoOK} className="btn btn-primary">{props.textoOK}</button>
            <button type="button" onClick={props.funcaoNOK} className="btn btn-danger">{props.textoNOK}</button>
        </div>    
    )
}
export default Feedback;