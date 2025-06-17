import { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Cardapp - Inicial",
};

export default function TelaInicial() {
  return (
    <div className="maiorDiv">
      <div className="col1">
        <img id="img-logotipo" src="./imagens/logotipo.png" alt="logotipo" />
      </div>
      <div className="col2">
        <p className="p1">INÍCIO</p>
        <a target="_blank" href="/tela-home-page">
          <button>ENTRAR</button>
        </a>
        <a target="_blank" href="/tela-cadastro">
          <button>CADASTRAR</button>
        </a>

        <p id="p2">Crie seu Site</p>
      </div>
    </div>
  );
}
