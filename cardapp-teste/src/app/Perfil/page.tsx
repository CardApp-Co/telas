import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css';


import DefaultHeader from '../components/defaultHeader';


export default function TelaPerfil() {
    return (
        <>
            <DefaultHeader />

            <Perfil_form
                nomeDoRestaurante="Nome do restaurante"
                email="restaurante@gmail.com"
                telefone="(85)99999-9999"
                cnpj="05.311.244/0001-09"
                imagem="/imagens/imagem-placeholder.png"
            />
        </>
    );
}

export function Perfil_form(props) {
    return (
        <div className='container-perfil'>
            <div className='col1'>
                <h1>{props.nomeDoRestaurante}</h1>
                <img src={props.imagem} alt="" />
            </div>

            <div className='col2'>
                <form>
                    <h1 className='text-form'>Informações gerais</h1>
                    <div className='container-input'>
                        <p>Nome da empresa:</p>
                        <input type="text" placeholder={props.nomeDoRestaurante} />
                    </div>
                    <div className='container-input'>
                        <p>Email de contato:</p>
                        <input type="email" placeholder={props.email} />
                    </div>
                    <div className='container-input'>
                        <p>Telefone de contato:</p>
                        <input type="text" placeholder={props.telefone} />
                    </div>
                    <div className='container-input'>
                        <p>CNPJ:</p>
                        <input type="text" placeholder={props.cnpj} />
                    </div>

                    <div className='div-linha'></div>

                    <div className='container-input'>
                        <p>Senha:</p>
                        <input required type="password" placeholder='********' />
                    </div>

                    <div className='container-input'>
                        <p>Confirmar Senha:</p>
                        <input required type="password" placeholder='********' />
                    </div>

                    <div className='col2-botoes'>
                        <input className='botao-reset' type="reset" value="limpar" />

                        <input className='botao-submit' type="submit" value="Salvar alterações" />
                    </div>

                </form>
            </div>
        </div>
    );
}