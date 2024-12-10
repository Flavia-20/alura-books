import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return(
        <ul className='opcoes'>
        {/*colocando js dentro do html, map varre a lista */}
          { textoOpcoes.map ( (texto) => (
              <li className='opcao'><p>{texto}</p></li>
          ) ) }
      </ul>
    )
}

export default OpcoesHeader;