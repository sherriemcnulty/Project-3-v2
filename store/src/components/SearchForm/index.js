import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor={props.inputType}>{props.inputType}</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name={props.inputType}
          list={props.databaseTable}
          type="text"
          className="form-control"
          placeholder="What product are you looking for?"
          id={props.inputType}
        />
        <datalist id="products">
          {props.products.map(product => (
            <option value={product} key={product} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
