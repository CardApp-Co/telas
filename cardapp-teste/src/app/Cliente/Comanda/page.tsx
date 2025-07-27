import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css'

import { ClientHeader } from '@/app/components/defaultHeader';

export default function Tela_comanda() {
    return (
        <>
            <ClientHeader />

            <main>
                <Comanda contaTotal="19.98"/>
            </main>
        </>
    );
}

export function Comanda(props) {
    return (
        <>
            <form>
                <div className='container-comanda'>
                    <h1 className='comanda-text'>COMANDA</h1>
                    <Item
                        nome="suco de maracujá"
                        qtd="1"
                        precoUni="9.99"
                        precoTotal="9.99"
                    />
                    <Item
                        nome="suco de maracujá"
                        qtd="1"
                        precoUni="9.99"
                        precoTotal="9.99"
                    />

                    <div className='linha'>
                    </div>

                    <h1>Conta: R${props.contaTotal}</h1>
                </div>
            </form>
        </>
    );
}

export function Item(props) {
    return (
        <>
            <div className='item'>
                <p>
                    <span className='titulo'>Nome: </span>
                    {props.nome}
                </p>
                <p>
                    <span className="titulo">QTD: </span>
                    {props.qtd}
                </p>
                <p>
                    <span className="titulo">Preç. Uni.: </span>
                    {props.precoUni}
                </p>

                <p>
                    <span className="titulo">Viagem</span>
                    <input type="checkbox" id="tabela-checkbox" />
                </p>

                <p>
                    <span className="titulo">Preç. Tot.: </span>
                    {props.precoTotal}
                </p>
            </div>
        </>
    );
}

/*
export function Tabela(props) {
    return (
        <>
            <div className='tabela-nome'>
                <h1>{props.tabelaNome}</h1>
                {props.children}
            </div>
        </>
    );
}

export function TabelaNomeItem(props) {
    return (
        <>
            <p>{props.nome}</p>
        </>
    );
}
*/