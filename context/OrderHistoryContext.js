import React, { createContext, useContext, useState } from 'react';

const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [recentlyPurchased, setRecentlyPurchased] = useState([]);

  const addOrder = (cartItems) => {
    const order = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toISOString(),
      total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      status: 'Completed'
    };
    
    setOrderHistory(prev => [order, ...prev]);
    
    // Update recently purchased
    const newRecentItems = cartItems.map(item => ({
      ...item,
      lastPurchased: new Date().toISOString()
    }));
    
    setRecentlyPurchased(prev => {
      const updated = [...prev];
      newRecentItems.forEach(newItem => {
        const existingIndex = updated.findIndex(item => item.id === newItem.id);
        if (existingIndex >= 0) {
          updated[existingIndex] = newItem;
        } else {
          updated.push(newItem);
        }
      });
      return updated.slice(0, 10); // Keep only last 10 items
    });
  };

  return (
    <OrderHistoryContext.Provider value={{
      orderHistory,
      recentlyPurchased,
      addOrder
    }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error('useOrderHistory must be used within OrderHistoryProvider');
  }
  return context;
};