
export default function DefaultHeader(props) {
    return (
        <>
            <header>
                <div className="divLogo">
                    <img className="logo" src="../imagens/cardapp-logo-nome.png" alt="cardapp-logo-nome" />
                </div>

                <div className="new-navbar">
                    <a href="/HomePage">LOJA</a>
                    <a href="/Pratos">PRATOS</a>
                    <a href="/Financeiro">FINANCEIRO</a>
                    <a href="/Perfil">PERFIL</a>
                </div>
            </header>
        </>
    );
}