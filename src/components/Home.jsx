import { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="row">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;

