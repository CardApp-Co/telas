export default function Modal1() {
    return (
        <dialog id="modal-1">
            <form className="container-modal">
                <p>Adicionar nova seção</p>
                <input type="text" placeholder="Nome da Seção" />
                <div className="container-buttons">
                    <button className="close-modal botao-close" data-modal="modal-1" type="button">Cancelar</button>
                    <button className="botao-submit" type="submit">Criar</button>
                </div>
            </form>
        </dialog>
    );
}