//Waktu yang dihabiskan 21 menit

import React, { useState } from "react";

export default function FormOrder({ handleAddItem }) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  //membuat handler :
  //1. click , setiap button di click akan memasukan data ke console.log berbentuk object
  //2. productHandler , untuk mendapat kan value dari user setiap kali menginput
  //3. quantityHandler , untuk mendapat kan value dari user setiap kali menginput
  //4. priceHandler , untuk mendapat kan value dari user setiap kali menginput

  const click = (event) => {
    handleAddItem({ product, quantity, price });
    event.preventDefault(); //fungsi ini membuat halaman tidak ke refresh setiap kali user input
    setProduct(""); // ini untuk membuat form product setiap kali input akan menjadi kosong
    setQuantity(""); // ini untuk membuat form quantity setiap kali input akan menjadi kosong
    setPrice(""); // ini untuk membuat form price setiap kali input akan menjadi kosong
    // console.log([]);
  };

  //   bentuk awal fungsi event : const youtFunction = () => {
  //       setYourValue(event.target.value)
  //   }

  const productHandler = (product) => {
    setProduct(product.target.value);
  };

  const quantityHandler = (quantity) => {
    setQuantity(quantity.target.value);
  };

  const priceHandler = (price) => {
    setPrice(price.target.value);
  };

  return (
    <div>
      <form>
        <input
          onChange={productHandler}
          type="text"
          value={product}
          placeholder="Product"
        ></input>
        <input
          onChange={quantityHandler}
          type="number"
          value={quantity}
          placeholder="Quantity"
        ></input>
        <input
          onChange={priceHandler}
          type="text"
          value={price}
          placeholder="Price"
        ></input>
        <input onClick={click} type="submit" value="submit"></input>
      </form>
    </div>
  );
}
