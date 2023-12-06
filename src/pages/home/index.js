
import { FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/menu';
import{ useState } from "react";
import LinkItem from '../../components/LinkItem';


import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home(){
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal]= useState(false);

async function handleShortLink(){
 try{
const response = await api.post('/shorten' , {
  long_url: link
})

setData(response.data);
setShowModal(true);
saveLink('@encurtaLink', response.data);

setLink('');

 }catch{
alert("Ops! Parece que algo deu errado.")



setLink('');


 }
  
}

    return(
      <div className="container-home">
       <div className="logo">
       <img src="./logo.png" alt="Meu Link SC"/>
       <h1>Link SC</h1>
       <span>Cole seu link e encurte-o 👇 </span>
       </div>


       <div className="area-input">
        <div>
        <FiLink size={24} color='#1C1C1C' />
        <input
        placeholder='Cole seu link aqui...'
        value={link}
        onChange={ (e) => setLink(e.target.value) }
        />
        </div>
        <button onClick={handleShortLink}>Gerar link</button>
       </div>
   
  <Menu />

 { showModal && (
  <LinkItem 
  closeModal={ () => setShowModal(false)  }
  content={data}
  />
 )}

  </div>
      
      )
    }
  

