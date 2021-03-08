import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from "react-redux";

//initialStore
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5
};

//store
const store = createStore(reducer,initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
