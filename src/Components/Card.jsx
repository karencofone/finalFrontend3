
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";


const Card = ({name, username, id}) => {


  const addFav = ()=>{

};


  return (
    <div className="card">
        <img src={img} alt="image doctor"/>
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>{username}</h3>
        <button onClick={()=> addFav()} className="favButton">🌟</button>
    </div>
  );
};

export default Card;
