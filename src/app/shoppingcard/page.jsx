'use client'

import { useEffect, useState } from 'react';
import ButtonCheckoutShoppingCard from '../components/ButtonCheckoutShoppingCard';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);


    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price); 
      return !isNaN(price) ? acc + price : acc; 
    }, 0);

    return total; 
  };
  const priceIds = cart.map(item => item.priceId); 
  return (
    <div className="p-5">
      <header>
        <h1 className="text-center my-5 text-3xl font-bold">Carrito de Compras</h1>
      </header>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="max-w-sm border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={item.image} alt={item.name} className="rounded-t-lg w-full" />
              <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                <h2 className="text-center">{item.name}</h2>
              </div>
              <h2 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.price}</h2>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg block mx-auto"
                onClick={() => handleRemoveFromCart(index)}
              >
                Eliminar
              </button>
            </div>

          ))}
          
        </div>
      )}
 <div className="mt-5 text-center">
        <h2 className="text-2xl font-semibold">Total: ${(calculateTotal())} USD</h2>
      </div>
      <ButtonCheckoutShoppingCard   priceIds={cart.map(item => item.priceId)}/>
     
    </div>
  );
}
