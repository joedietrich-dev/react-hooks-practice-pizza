import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const DEFAULT_PIZZA = {
  id: 0,
  topping: "",
  size: "",
  vegetarian: false,
};

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(DEFAULT_PIZZA);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then(setPizzas);
  }, []);

  function handleEditPizzaClick(id) {
    setSelectedPizza(pizzas.find((p) => p.id === id));
  }

  function handleFieldChange(e) {
    console.log(e);
    setSelectedPizza({
      ...selectedPizza,
      [e.target.name]: e.target.name === "vegetarian" ? e.target.value === "Vegetarian" : e.target.value,
    });
  }

  function handlePizzaFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPizza),
    }).then(res => res.json()).then(data => setPizzas(pizzas.map(pizza => data.id === pizza.id ? data : pizza)))
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onPizzaFieldChange={handleFieldChange} onPizzaFormSubmit={handlePizzaFormSubmit} />
      <PizzaList pizzas={pizzas} onEditPizzaClick={handleEditPizzaClick} />
    </>
  );
}

export default App;
