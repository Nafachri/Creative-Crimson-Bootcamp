import React, { useEffect, useState } from "react";
import FormOrder from "../component/FormOrder";

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    console.log(orderItems);
  }, [orderItems]);

  const handleAddItem = (newOrderItem) => {
    setOrderItems([...orderItems, newOrderItem]);
  };
  return (
    <>
      <FormOrder handleAddItem={handleAddItem} />
    </>
  );
}
export default OrderPage;
