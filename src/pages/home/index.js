
import { FiLink} from 'react-icons/fi';
import './home.css';


import Menu from '../../components/menu';

export default function Home(){
    return(
      <div className="container-home">
       <div className="logo">
       <img src="./logo.png" alt="Meu Link SC"/>
       <h1>Link SC</h1>
       <span>Cole seu link e encute-o 👇 </span>
       </div>


       <div className="area-input">
        <div>
        <FiLink size={24} color='#1C1C1C' />
        <input
        placeholder='Cole seu link aqui...'
        />
        </div>
        <button>Gerar link</button>
       </div>
      </div>

      <Menu />
      
    )
  }