export default function Prato(props) {
    return (
        <>
            <div className='container-prato'>
                <div>
                    <Edit_button modalId="modal-1" />
                </div>

                <div className='container1'>
                    <div className='container1-nomeDoPrato'>
                        {props.nomeDoPrato}
                    </div>
                    <div className='container1-imagem'>
                        <img src={props.imagem}></img>
                    </div>
                </div>

                <div className="container-custo">
                    Custo: R${props.custo}
                </div>

                <div className='container2'>
                    <div className='container2-nome'>
                        Descricao
                    </div>
                    <div className='container2-descricao'>{props.descricao}</div>
                </div>
            </div>
        </>
    );
}

export function Edit_button(props) {
    return (
        <button className="container-editar" type="button" onClick={() => {
            const modalId = props.modalId;
            const modal = document.getElementById(modalId) as HTMLDialogElement | null;
            if (modal && typeof modal.showModal === "function") {
                modal.showModal();
            }
        }}>
            <img className="edit-icon" src="/imagens/edit.svg" alt="/imagens/edit.svg" />
            <span>Editar</span>
        </button>
    );
}

export function Cliente_Prato(props) {
    return (
        <>
            <div className='container-prato'>

                <div className='container1'>
                    <div className='container1-nomeDoPrato'>
                        {props.nomeDoPrato}
                    </div>
                    <div className='container1-imagem'>
                        <img src={props.imagem}></img>
                    </div>
                </div>

                <div className="container-custo">
                    Custo: R${props.custo}
                </div>

                <div>
                    <form>
                        <button className="botao-comanda" type="submit">
                            Adicionar à comanda
                            <img src="/imagens/add_circle_little.svg" alt="" />
                        </button>
                    </form>
                </div>

                <div className='container2'>
                    <div className='container2-nome'>
                        Descricao
                    </div>
                    <div className='container2-descricao'>{props.descricao}</div>
                </div>
            </div>
        </>
    );
}
