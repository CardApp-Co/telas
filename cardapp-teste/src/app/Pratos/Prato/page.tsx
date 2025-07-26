import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css'

import DefaultHeader from '@/app/components/defaultHeader';
import Prato from '@/app/components/prato';

export default function TelaPrato(props) {
    return (
        <>
            <DefaultHeader />

            <main>
                <Prato
                    nomeDoPrato="Cuscuz com rabanda e feijao e whey da growth suplements"
                    descricao="Todos os ingredientes abaixo fritos assados
                                    no capricho saborosos aaaaaaaaaaaaaaaaaaaaaaa
                                    pegou fogo na roupa do cozinheiro"
                    imagem="/imagens/imagem-placeholder.png"

                />
            </main>
        </>
    );
}

