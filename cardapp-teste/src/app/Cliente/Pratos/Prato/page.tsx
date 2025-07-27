
import './styles/default_style.css';
import './styles/style_header.css';
import './styles/style.css'

import { ClientHeader } from '@/app/components/defaultHeader';
import { Cliente_Prato } from '@/app/components/prato';

export default function Cliente_TelaPrato(props) {
    return (
        <>
            <ClientHeader />

            <main>
                <Cliente_Prato
                    nomeDoPrato="Cuscuz com rabanda e feijao e whey da growth suplements"
                    descricao="Todos os ingredientes abaixo fritos assados
                                    no capricho saborosos aaaaaaaaaaaaaaaaaaaaaaa
                                    pegou fogo na roupa do cozinheiro"
                    imagem="/imagens/imagem-placeholder.png"
                    custo="9.99"
                />

            </main>
        </>
    );
}

