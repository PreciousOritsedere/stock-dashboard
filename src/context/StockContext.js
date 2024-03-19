import React, { createContext, useContext, useEffect, useState } from "react";
import initialStocks from "@/mockdata/stockData.json";

const StockContext = createContext();

export function StockProvider({ children }) {
  const [stocks, setStocks] = useState(initialStocks);

  useEffect(() => {
    // Mock WebSocket object
    const mockWebSocket = {
      onmessage: null, 
      send: (data) => {
        // console.log("Mock send:", data);
        // Simulate a response after a delay
        setTimeout(() => {
          if (mockWebSocket.onmessage) {
            // Simulate a response from the server with the same data that was sent
            mockWebSocket.onmessage({ data });
          }
        }, 500);
      },
      close: () => {
        console.log("Mock WebSocket closed");
      },
    };

   
    mockWebSocket.onmessage = (event) => {
    //   console.log("Mock onmessage event:", event.data);
      // Update the stock price in context with the simulated data
      const message = JSON.parse(event.data);
      setStocks((prevStocks) =>
        prevStocks.map((stock) =>
          stock.symbol === message.symbol
            ? { ...stock, price: message.price }
            : stock
        )
      );
    };

    // Function to simulate receiving a WebSocket message
    const simulateWebSocketMessage = () => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const randomIncrement = [10, 20, 30][Math.floor(Math.random() * 3)];
          const newPrice = (stock.price + randomIncrement).toFixed(2);
        //   console.log(`Simulated new price for ${stock.symbol}: $${newPrice}`);
          return { ...stock, price: parseFloat(newPrice) };
        })
      );

      // Simulate server-initiated updates
      const simulatedData = {
        symbol: "AAPL",
        price: parseFloat((155.22).toFixed(2)), // Simulate a new price
      };
      // Simulate sending data from the server to the client
      mockWebSocket.send(JSON.stringify(simulatedData));
    };

    // Start simulating messages every 5 seconds
    const intervalId = setInterval(simulateWebSocketMessage, 5000);

    // Return cleanup function
    return () => {
      clearInterval(intervalId);
      mockWebSocket.close();
    };
  }, []);

  return (
    <StockContext.Provider value={{ stocks, setStocks }}>
      {children}
    </StockContext.Provider>
  );
}

export function useStocks() {
  return useContext(StockContext);
}
