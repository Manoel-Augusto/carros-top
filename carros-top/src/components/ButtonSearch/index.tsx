import "./styles.css";
const ButtonSearch = () => {
  return (
    <div className="search">
      <div className="group">
        <input placeholder="Digite sua busca"/>
        <button className="btn btn-secondary btn-icon">BUSCAR</button>
      </div>
    </div>
  );
};
export default ButtonSearch;
