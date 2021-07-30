import CarImg from "assets/images/carList.png";
import "./styles.css";

const CarList = () => {
  return (
    <>
       
    <div>
      
      <div className="base-card list-card">
      

        <div className="card-img">
          <img src={CarImg} alt="Nome do produto" />
        </div>

        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-secondary">COMPRAR</button>
      </div>
    </div>
    
    </>

  );
};
export default CarList;
