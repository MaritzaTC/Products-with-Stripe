
'use client'
export default function ButtonShoppingCard({ priceId, image, name, price}) {
    const handleAddToCart = () => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  
     
      const newItem = { priceId, image, name, price };
  
      
      currentCart.push(newItem);
  
     
      localStorage.setItem('cart', JSON.stringify(currentCart));
  
      alert(`${name} ha sido agregado al carrito.`);
      
    };
  
    return (
      <button 
        className="bg-transparent border-2 border-blue-500 py-2 px-4 mx-auto block hover:bg-blue-500 hover:text-white rounded-lg"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    );
  }
  