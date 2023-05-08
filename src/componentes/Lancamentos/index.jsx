import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { livrosLancamentos } from './dadosLancamentos'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
`

const Livro = styled.div`
    margin: 16px;
    cursor: pointer;

    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; 

    &:hover{
        transform: scale(1.1);
    }

    img{
        height: 350px;
        width: 250px;
    }

`

function Lancamentos() {
    return (
        <LancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livrosLancamentos.map( livro => (
                    <Livro>
                        <img src={livro.src}/>
                    </Livro>
                    
                ) ) }
            </NovosLivrosContainer>

            <CardRecomenda 
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angular 11"}
                descricao={"Construindo uma aplicação com a plataforma Google"}
                img={imagemLivro}
            />

            <CardRecomenda 
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angular 12"}
                descricao={"Construindo uma aplicação com a plataforma Google"}
                img={imagemLivro}
            />
        </LancamentosContainer>
    )
}

export default Lancamentos;