import "./style.css";
import "./style_header.css";
import "./style_main.css";
import "./style_pratos_sugeridos.css";
import PratoSugerido from "../components/pratoSugerido";
import Banner from "../components/banner";
import DefaultHeader from "../components/defaultHeader";

export const metadata: Metadata = {
    title: "Cardapp - HomePage",
};

export default function TelaHomePage() {
    return (
        <>
            <DefaultHeader />

            <main>
                <Banner
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
