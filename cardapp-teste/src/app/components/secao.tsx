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
                    <Botao_secao />
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
                <img src="/imagens/add_circle.svg" alt="" />
                <span>Adicionar Prato</span>
            </div>
        </button>
    );
}