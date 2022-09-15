import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

//nome de um componente React pode ser utilizado de maneira semelhante aouso de uma tag HTML. 
// Quando fazemos isso, a função que o define é colocada em execução, produzindo a expressão JSX 
// que especificamos. Assim, o componenteReact ‘Pedido’ pode ser utilizado no arquivo index.js. 
//Basta importar e inserir na parte desejada.
import Pedido from './pedido'

import Cartao from './cartao'

//No arquivo index.js, cada componente Pedido terá um “irmão” – filho do mesmoCartao – do tipo Feedback.
import Feedback from './feedback'

const App = () => {

    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert ("Agradecemos a confirmação!")
    const funcaoNOK = () => alert ("Verificaremos o ocorrido!")
    const componenteFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK} textoNOK={textoNOK} funcaoNOK={funcaoNOK}/>;

    return (
        <div className="container border rounded mt-2">

            {/* linha para o título */}
            <div className="row border-bottom m-2 ">
                {/*h1.display-5.text-center{Seus Pedidos}*/}
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>

            {/* linha para o primeiro pedido pedido*/}
            <div className="row justify-content-center">
                {/* controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/*componenteReact ‘Pedido’ pode ser utilizado no arquivo index.js*/}
                    <Cartao cabecalho="22/04/2021">
                        <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400- SATA"/>
                        {componenteFeedback}
                    </Cartao>

                     {/*Essa parte comentada foi inserida no pedido.js: 
                     recorte a definição do primeiro pedido existente no arquivo index.js ecole no arquivo Pedido.js */}
                    {/*<div className="card my-2">
                        <div className="card-header text-muted">22/04/2021</div>
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-hdd fa-2x "></i>
                            </div>
                            <div className="flex-grow-1 ms-3 border">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD Kingston A400 - SATA</p>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>

            {/* linha para o segundo pedido pedido*/}
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                <Cartao  cabecalho="20/04/2021">
                    <Pedido icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete Mathematics - Donald Knuth" />
                    {componenteFeedback}
                </Cartao>
                
                {/* cartão */}
                {/* <div className="card">
                        {/* cabeçalho do cartão */}
                {/* <div className="card-header text-muted">20/04/2021</div>
                         {/* corpo do cartão */}
                    {/* <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                        {/* <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Livro</h4>
                                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                            </div>
                         </div>
                    </div>
                    */}
                </div>
            </div>

            {/* linha para o terceiro pedido pedido*/}
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                <Cartao cabecalho="21/01/2021">
                    <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook" descricao="Notebook Dell - 8Gb - i5" />
                    {componenteFeedback}
                </Cartao>
                    
                    {/* cartão */}
                {/* <div className="card">
                        {/* cabeçalho do cartão */}
                    {/* <div className="card-header text-muted">21/01/2021</div>
                         {/* corpo do cartão */}
                    {/* <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-laptop fa-2"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                        {/* <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Notebook</h4>
                                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                            </div>
                         </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

ReactDOM.render( //render = renderizar
    <App />,
    document.querySelector('#root') //busca por qualquer seletor e não só pelo id
)
