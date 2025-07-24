import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css'

import DefaultHeader from '@/app/components/defaultHeader';

export default function TelaPrato(props) {
    return (
        <>
            <DefaultHeader />

            <main>
                <Prato nomeDoPrato="Cuscuz com rabanda e feijao e whey da growth suplements" descricao="Todos os ingredientes abaixo fritos assados
                                    no capricho saborosos aaaaaaaaaaaaaaaaaaaaaaa
                                    pegou fogo na roupa do cozinheiro"/>
            </main>
        </>
    );
}

export function Prato(props) {
    return (
        <>
            <div className='container-prato'>
                <div className='container1'>
                    <div className='container1-nomeDoPrato'>{props.nomeDoPrato}</div>
                    <div className='container1-imagem'>
                        <img src={"/imagens/imagem-placeholder.png"}></img>
                    </div>
                </div>

                <div className='container2'>
                    <div className='container2-nome'>Descricao</div>
                    <div className='container2-descricao'>{props.descricao}</div>
                </div>
            </div>
        </>
    );
}