
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        fetchFavoritos([])
    }, [])

    async function fetchFavoritos(){
        const favoritosDaAPI = await getFavoritos()
        setFavoritos(favoritosDaAPI)
    }

    return (
        <AppContainer>
            { favoritos.map( favorito => (
                <Resultado>
                    <img src={favorito.src}/>
                    <p>{favorito.nome}</p>
                </Resultado>
            )) }
        </AppContainer>
  );
}

export default Favoritos