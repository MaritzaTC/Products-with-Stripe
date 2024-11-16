// ButtonCheckoutShoppingCard.js
'use client';  // Asegúrate de que este componente se ejecute en el cliente

function ButtonCheckoutShoppingCard({ priceIds }) {
  const handleCheckout = async () => {
    try {
      const stripePaymentUrl = process.env.STRIPE_URL;
      window.location.href = stripePaymentUrl;
    } catch (error) {
      console.error('Error durante el proceso de pago:', error);
      alert('Hubo un error durante el proceso de pago. Por favor, inténtalo nuevamente.');
    }
  };
  return (
    <button
      className="bg-transparent border-2 border-blue-500 py-2 px-4 mx-auto block hover:bg-blue-500 hover:text-white rounded-lg"
      onClick={handleCheckout}
    >
      Comprar
    </button>
  );
}

export default ButtonCheckoutShoppingCard;
