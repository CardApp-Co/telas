import styles from "../styles/style_pratos_sugeridos.css";

export default function PratoSugerido(props) {
    return (
        <>
            <div className="container-prato-sugerido">
                <div className="prato-imagem"></div>
                <p>{props.name}</p>
            </div>
        </>
    );
}