import "./style.css";
import "./style_header.css";
import "./style_main.css";
import "./style_pratos_sugeridos.css";
import PratoSugerido from "../components/pratoSugerido";

export default function TelaHomePage() {
    return (
        <>
            <header>

                <div className="divLogo">
                    <img className="logo" src="../imagens/cardapp-logo-nome.png" alt="cardapp-logo-nome" />
                </div>

                <div className="new-navbar">
                    <a href="">LOJA</a>
                    <a href="../TelaPratos/index.html">PRATOS</a>
                    <a href="">FINANCEIRO</a>
                    <a href="">PERFIL</a>
                </div>

            </header>
            <main>


                <div className="container">
                    <div className="container-info">
                        <h1>NOME DO RESTAURANTE</h1>
                        <h1>EMAIL DO DONO: dono@gmail.com</h1>
                        <h1>CNPJ : 1029-123</h1>
                        <h1>CPF: 666.666.666-66</h1>
                        <h1>LOCALIZAÇÃO: Av. Beira Mar 666</h1>
                        <h1>TELEFONE CELULAR: 9666-6666 </h1>
                    </div>
                </div>

                <div className="container-pratos-sugeridos">
                    <div className="texto-pratos-sugeridos">Pratos sugeridos</div>
                    <div className="secao-pratos-sugeridos">
                        <PratoSugerido name= "Cuscuz" ></PratoSugerido>
                        <PratoSugerido name= "rabanda ao molho de feijao com arroz e whey da growth"></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                        <PratoSugerido></PratoSugerido>
                    </div>
                </div>
            </main>
        </>
    );
}
