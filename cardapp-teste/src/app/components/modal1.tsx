export default function Modal1() {
    return (
        <dialog id="modal-1">
            <form className="container-modal">
                <p>Adicionar novo item</p>
                <div className="container-input">
                    <label>Digite o nome do item</label>
                    <input required type="text" placeholder="Baião de dois" />
                </div>
                <div className="container-input">
                    <label>Adicione uma pequena descrição ao item</label>
                    <input required type="text" placeholder="Vegano e sem conservante" />
                </div>
                <div className="container-input">
                    <label htmlFor="input-file">Adicione uma foto</label>
                    <div>
                        <input id="input-file" type="file" />
                    </div>
                </div>
                <div className="container-buttons">
                    <button className="close-modal botao-close" data-modal="modal-1" type="button">Cancelar</button>
                    <button className="botao-submit" type="submit">Adicionar</button>
                </div>
            </form>
        </dialog>
    );
}