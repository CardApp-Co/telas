import { ClientHeader } from "@/app/components/defaultHeader";
import Banner from "@/app/components/banner";
import PratoSugerido from "@/app/components/pratoSugerido";

import './styles/style.css';
import './styles/style_header.css';
import './styles/style_main.css';
import './styles/style_pratos_sugeridos.css';






export const metadata: Metadata = {
    title: "Cardapp - HomePage",
};

export default function Cliente_HomePage() {
    return (
        <>
            <ClientHeader />

            <main>
                <Banner
                    imagem="/imagens/imagem-placeholder.png"
                    nome="RESTAURANTE MASSA"
                    email="carlinhos.gustavo@gmail.com"
                    cnpj="66666-666"
                    localizacao="Av. Beira Mar 666"
                    telefone="(85)96666-6666"
                >
                </Banner>

                <div className="container-pratos-sugeridos">
                    <div className="texto-pratos-sugeridos">Pratos sugeridos</div>
                    <div className="secao-pratos-sugeridos">
                        <PratoSugerido name="Cuscuz" ></PratoSugerido>
                        <PratoSugerido name="rabanda ao molho de feijao com arroz e whey da growth"></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                    </div>
                </div>
            </main>
        </>
    );
}
