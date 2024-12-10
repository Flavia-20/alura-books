import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

//lista que guarda os icones
const icones = [perfil, sacola]

function IconesHeader() {
    return(
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default IconesHeader;