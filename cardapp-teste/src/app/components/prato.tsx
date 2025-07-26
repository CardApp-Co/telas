export default function Prato(props) {
    return (
        <>
            <div className='container-prato'>
                <div className='container1'>
                    <div className='container1-nomeDoPrato'>{props.nomeDoPrato}</div>
                    <div className='container1-imagem'>
                        <img src={props.imagem}></img>
                    </div>
                </div>

                <div className='container2'>
                    <div className='container2-nome'>Descricao</div>
                    <div className='container2-descricao'>{props.descricao}</div>
                </div>
            </div>
        </>
    );
}