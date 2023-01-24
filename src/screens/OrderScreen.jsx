import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import GlobalContext from "../store/GlobalContext";

const OrderScreen = () => {
  const [bases, setBases] = useState([]);
  const [extras, setExtras] = useState([]);
  const [size, setSize] = useState("");
  const [userExtras, setUserExtras] = useState([]);
  const {state, dispatch} = useContext(GlobalContext);
  const baseRef = useRef();
  const notesRef = useRef();

  // console.log(userExtras);
  console.log(state.cart);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleExtras = (e) => {
    if (userExtras.includes(e.target.value)) {
      let newState = userExtras.filter((x) => x !== e.target.value);
      setUserExtras(newState);
    } else {
      setUserExtras([...userExtras, e.target.value]);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    const cake = {
      name: "Custom Order",
      size: size,
      base: baseRef.current.value,
      extras: userExtras,
      notes: notesRef.current.value,
    };
    dispatch({type: "ADDTOCART", payload: cake})
  };

  const getData = () => {
    axios
      .get("/api/getOptions")
      .then((res) => {
        setBases(res.data.bases);
        setExtras(res.data.extras);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const baseOptions = bases.map((cake) => {
    return <option value={cake.name}>{cake.name}</option>;
  });

  const extraOptions = extras.map((add) => {
    return (
      <div className="extra">
        <label htmlFor={add.name}>{add.name}</label>
        <input
          type="checkbox"
          name="extras"
          id={add.name}
          value={add.name}
          onChange={handleExtras}
        />
      </div>
    );
  });

  return (
    <div className="main-page">
      <h1>Order up!</h1>
      <form onSubmit={addToCart}>
        <h3>Select Size</h3>
        <div className="size-container">
          <label htmlFor="small">small</label>
          <input
            type="radio"
            id="small"
            name="size"
            value="Small"
            onChange={handleSizeChange}
          />
          <label htmlFor="medium">medium</label>
          <input
            type="radio"
            id="medium"
            name="size"
            value="Medium"
            onChange={handleSizeChange}
          />
          <label htmlFor="large">large</label>
          <input
            type="radio"
            id="large"
            name="size"
            value="Large"
            onChange={handleSizeChange}
          />
          <label htmlFor="x-large">x-large</label>
          <input
            type="radio"
            id="x-large"
            name="size"
            value="X-Large"
            onChange={handleSizeChange}
          />
        </div>
        <select name="" id="" ref={baseRef}>
          <option value="" default disabled selected>
            Select a Base
          </option>
          {baseOptions}
        </select>
        <h3>Extras</h3>
        <div className="extras-container">{extraOptions}</div>
        <textarea
          rows={6}
          placeholder="Tell us about your order:"
          ref={notesRef}
        />
        <div className="order-button-container">
          <button>Add to Cart</button>
        </div>
      </form>
    </div>
  );
};

export default OrderScreen;
