import { Metadata } from "next";
import './style.css'

export const metadata: Metadata = {
    title: "Cardapp - Cadastro",
};

export default function TelaCadastro() {
    return (
        <>
            <div>
                <img id="img-logotipo" src="imagens/logotipo.png" alt="logotipo" />
            </div>
            <form action={"/HomePage"}>
                <p id="p1">Não tem uma conta? Cadastre-se!</p>
                <input type="text" placeholder="Nome do restaurante" required />
                <input type="email" placeholder="email" required />
                <input type="text" placeholder="cnpj" required />
                <input type="text" placeholder="cpf" required />
                <input type="text" placeholder="Endereço" required />
                <input type="password" placeholder="Senha" required />
                <label id="input-file-label" htmlFor="input-file">
                    <img src="imagens/upload_icon.svg"></img>
                    Adicione uma foto
                </label>
                <div>
                    <input id="input-file" type="file" />
                </div>

                <input id="cadastrar" type="submit" value={"CADASTRAR"} />

            </form>
        </>
    )
}