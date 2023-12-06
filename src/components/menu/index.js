import './menu.css';
import { BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a  className="social" href="https://youtube.com/c/sujeitoprogramador">
            </a>
                <BsYoutube color="black" size={34} />
            <a className="social" href="https://instagram.com/sujeitoprogramador">
            </a>
                <BsInstagram color="black" size={34} />

            
            
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}