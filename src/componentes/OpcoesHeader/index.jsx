import './style.css'

const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];

function OpcoesHeader(){
    return(
        <ul className='opcoes'>
            {
                textoOpcoes.map((item) => (
                <li className='opcao'><p>{item}</p></li>
                ))
            }
        </ul>
    )
}

export default OpcoesHeader;