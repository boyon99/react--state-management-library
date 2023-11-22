import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from './ErrorBanner';
import { OrderContext } from '../context/OrderContext';

const Type = ({ orderType }) => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // 상품 데이터와 상품 개수 업데이트 함수 가져오기
  const [orderData, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`)
      setItems(response.data)
    } catch (e) {
      setError(true);
    }
  }

  const ItemComponent = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, orderType)} />
  ))

  if (error) {
    return <ErrorBanner />
  }

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:{orderData.totals[orderType]}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === "options" ? "column" : "row"
        }}
      >{optionItems}</div>
    </div>
  );
};

export default Type;