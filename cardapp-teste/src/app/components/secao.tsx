import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Secao(props) {
    return (
        <>
            <div className="container-secao">
                <div className="container-secao-div-acima">
                    <span>
                        {props.secao_nome}
                        <button className="open-modal" data-modal="modal-3"><i className="fa-solid fa-pencil"></i></button>
                        <button className="open-modal" data-modal="modal-2"><i className="fa-solid fa-trash-can"></i></button>
                    </span>
                </div>
                <div className=" container-secao-pratos">
                    {props.children}
                </div>
            </div >
        </>
    );
}

export function Botao_secao() {
    return (
        <button type="button" onClick={() => {
            const modal = document.getElementById("modal-1") as HTMLDialogElement | null;
            if (modal && typeof modal.showModal === "function") {
                modal.showModal();
            }
        }}>
            <div className="adicionar-prato">
                <FontAwesomeIcon icon={faCirclePlus} size="1x" />
            </div>
        </button>
    );
}