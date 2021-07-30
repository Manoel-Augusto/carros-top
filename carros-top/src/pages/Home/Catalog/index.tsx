import ButtonSearch from "components/ButtonSearch";
import CarList from "components/CarList";
import "./styles.css";

const Catalog = () => {
  return (
    <div className="container my-4 container-catalog">
      <div className="container my-4">
      <ButtonSearch />
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CarList />
          </div>

  
        </div>
      </div>
    </div>
  );
};
export default Catalog;
