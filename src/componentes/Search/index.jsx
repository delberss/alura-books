import { useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import {livros} from './dadosSearch';


const SearchContainer = styled.section`
    background: linear-gradient(90deg, #002F52, #326589);
    color: #FFF;
    text-align: center;
    min-height: 500px;
    margin-bottom: 36px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const LivrosPesquisadosContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
        margin-right: 16px;
        cursor: pointer;
        transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; 
    }

    div:hover{
        transform: scale(1.1);
    }
`

function Search(){

    const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

    return(
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante. </Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onChange={ e => {
                    const textoDigitado = e.target.value;
                    const resultadoSearch = livros.filter((livro) => livro.nome.toUpperCase().includes(textoDigitado.toUpperCase()))
                    setLivrosPesquisados(resultadoSearch);
                }}
            />
            <LivrosPesquisadosContainer>
                {
                    livrosPesquisados.map(livro => (
                        <div>
                            <p>{livro.nome}</p>
                            <img src={livro.src}/>
                        </div>
                    ))
                }
            </LivrosPesquisadosContainer>
           
        </SearchContainer>
    )
}

export default Search;