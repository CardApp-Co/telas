import styles from "../styles/style_banner.css";

export default function Banner(props) {
    return (
        <>
            <div className="container">
                <div className="container-info">
                    <h1>{props.nome}</h1>
                    <h1>{props.email}</h1>
                    <h1>{props.cnpj}</h1>
                    <h1>{props.localizacao}</h1>
                    <h1>{props.telefone}</h1>
                </div>
            </div>
        </>
    );
}