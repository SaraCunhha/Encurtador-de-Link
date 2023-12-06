import { useState, useEffect } from 'react'
import './link.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from "react-router-dom";

import {getLinksSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links(){
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);




  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink')

      if(result.lenght === 0){
        //nossa lista esta vazia
        setEmptyList(true);
      }
      setMyLinks(result);
    }
    getLinks();
  }, [])


  function handleOpenLink(Link){
    setData(Link)
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id)

    if(result.lenght ===0){
      console.log('Você não tem mais link.' )
    }

    setMyLinks(result)
  }
    return(
      <div className="links-container">
        <div className='links-header'>
          <Link to="/">
          <FiArrowLeft size={38} color="#23f179"/>
          </Link>
          <h1>Meus Links</h1>
        </div>

        { emptyList && (
          <div className="links-item">
            <h2 className="empty-text">Sua lista está vazia...
            </h2>

          </div>
        )}

        { myLinks.map( Link => (
          <div key={Link.id} className='links-item'>
          <button className="link" onClick={() => handleOpenLink(Link)}>
            <FiLink size={18} color='#000000'/>
            {Link.long_url}
          </button>
          <button className="link-delete" onClick={ () => handleDelete(Link.id)}>
            <FiTrash size={24} color='#800000'/>
          </button>
        </div>

        ))}


        { showModal && (
          <LinkItem
          closeModal={ () => setShowModal(false) }
          content={data}
          />
        )}    
       

      </div>

      
    )
  }