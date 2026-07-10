import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("cart");

  return savedCart ? JSON.parse(savedCart) : [];

});

  const addToCart = (food) => {

    const exist = cart.find(item => item._id === food._id);

    if(exist){

      setCart(cart.map(item =>
        item._id === food._id
        ? {...item, quantity:item.quantity+1}
        : item
      ));

    }else{

      setCart([
        ...cart,
        {
          ...food,
          quantity:1
        }
      ]);

    }

  };

  const increaseQuantity=(id)=>{

    setCart(cart.map(item=>

      item._id===id

      ? {...item,quantity:item.quantity+1}

      : item

    ));

  };

  const decreaseQuantity=(id)=>{

    setCart(cart.map(item=>

      item._id===id

      ? {...item,quantity:item.quantity-1}

      : item

    ).filter(item=>item.quantity>0));

  };

  const removeFromCart=(id)=>{

    setCart(cart.filter(item=>item._id!==id));

  };

  const clearCart=()=>{

    setCart([]);

  };

  useEffect(() => {

  localStorage.setItem("cart", JSON.stringify(cart));

}, [cart]);

  return(

    <CartContext.Provider

    value={{

      cart,

      addToCart,

      increaseQuantity,

      decreaseQuantity,

      removeFromCart,

      clearCart

    }}

    >

      {children}

    </CartContext.Provider>

  );

};