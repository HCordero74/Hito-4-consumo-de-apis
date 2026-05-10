import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatNumber } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <hr />
        <p className="mb-1">🍕 Ingredientes:</p>
        <ul className="small text-muted">
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
      </div>
      <div className="card-footer bg-white border-top-0 text-center">
        <h4 className="fw-bold text-dark">Precio: ${price.toLocaleString('es-CL')}</h4>
        <div className="d-flex justify-content-around mt-3">
            <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
            <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;