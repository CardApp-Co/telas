import { Metadata } from "next";
import './style.css'

export const metadata: Metadata = {
  title: "Cardapp - Cadastro",
};

export default function TelaCadastro() {
    return (
        <>
            <img id="img-logotipo" src="imagens/logotipo.png" alt="logotipo" />

            <form target="_blank" action={"/HomePage"}>
                <input type="text" placeholder="cnpj" required />
                <br />
                <input id="input2" type="password" placeholder="Senha" required />
                <br />
                <input id="cadastrar" type="submit" value={"CADASTRAR"} /> 
                <br /><br />
                <p id="p1">Não tem uma conta? Cadastre-se!</p>
            </form>
        </>
    )
}