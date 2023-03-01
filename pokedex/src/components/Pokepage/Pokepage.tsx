import './Pokepage.css'
import { useParams } from 'react-router-dom';

function Pokepage() {
  const { name } = useParams();
  let name2 = ' ';
  let description = "Wow, this sure is a Pokemon!"
  return (
    <div>
        <div className = "header">
            <h2>{name2.charAt(0).toUpperCase() + name2.slice(1)}</h2>
        </div>
        <div className = "content-body">
            <img className = "poke-art" alt="Pokemon Sprite"></img>
            <div>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Pokepage