import React, { useEffect, useState } from "react";
import FormOrder from "../component/FormOrder";

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);

  // useEffect(() => {
  //   console.log(orderItems);
  // }, [orderItems]);

  useEffect(() => {
    console.log(orderItems);
  }, [orderItems]);

  // const handleAddItem = (newOrderItem) => {
  //   setOrderItems([...orderItems, newOrderItem]);
  // };

  function handleAddItem(newOrdewerItem) {
    setOrderItems([...orderItems, newOrdewerItem]);
  }
  return (
    <>
      {/* <FormOrder handleAddItem={handleAddItem} /> */}
      <FormOrder handleAddItem={handleAddItem} />
    </>
  );
}

export default OrderPage;
