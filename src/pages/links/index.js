import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
export default function Links(){
    return(
      <div className="links-container">
        <div className='links-header'>
          <FiArrowLeft size={38} color="#000000"/>
          <h1>Meus Links</h1>
        </div>

        <div className='links-item'>
          <button>
            <FiLink size={18} color='#000000'/>
            https://links.com
          </button>
          <button>
            <FiTrash size={24} color='#800000'/>
          </button>
        </div>
      </div>
    )
  }