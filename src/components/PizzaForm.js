import React from "react";

function PizzaForm({ selectedPizza, onPizzaFieldChange = (f) => f, onPizzaFormSubmit = (f) => f }) {
  const isVegetarian = selectedPizza.vegetarian;
  return (
    <form onSubmit={onPizzaFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={selectedPizza.topping}
            onChange={onPizzaFieldChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={selectedPizza.size} onChange={onPizzaFieldChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={isVegetarian} onChange={onPizzaFieldChange} />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!isVegetarian} onChange={onPizzaFieldChange} />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
