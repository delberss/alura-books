import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`;
const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    height: 100%;
    min-width: 120px;
    padding: 0 5px;

    cursor: pointer;
`;

const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];


function OpcoesHeader(){
    return(
        <Opcoes>
            {
                textoOpcoes.map((item) => (
                <Opcao><p>{item}</p></Opcao>
                ))
            }
        </Opcoes>
    )
}

export default OpcoesHeader;