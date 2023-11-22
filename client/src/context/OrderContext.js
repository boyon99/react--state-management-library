import { createContext, useEffect, useMemo, useState } from 'react';

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {

  // 상품 개수 
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map()
  })

  // 상품 전체 가격
  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    totals: 0
  })

  // 상품 가격
  const pricePerItem = {
    products: 5000,
    options: 2000
  }

  // 상품 가격 계산 함수
  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;
    for (const count of orderCounts[orderType].values()) {
      optionCount += count;
    }
    return optionCount * pricePerItem[orderType];
  }

  // 상품 전체 가격 업데이트
  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts)
    const optionsTotal = calculateSubtotal("options", orderCounts)
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total
    })
  }, [orderCounts])


  // 상품 개수 업데이트
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts }
      const orderCountsMap = orderCounts[orderType]
      orderCountsMap.set(itemName, parseInt(newItemCount))
      setOrderCounts(newOrderCounts)
    }

    return [{ ...orderCounts, totals }, updateItemCount]
  }, [orderCounts, totals])


  return <OrderContext.Provider value={value}>
    {children}</OrderContext.Provider>
}