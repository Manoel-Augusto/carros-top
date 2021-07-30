import { Link } from "react-router-dom";
import "./styles.css";
const ButtonIcon = () => {
  return (
    <Link to="catalogo">
      <button className="btn btn-secondary btn-icon">VER CATÁLOGO</button>
    </Link>
  );
};
export default ButtonIcon;
