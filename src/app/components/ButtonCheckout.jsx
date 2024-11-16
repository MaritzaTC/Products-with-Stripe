"use client"
function ButtonCheckout({ priceId }) {
    return (
        <button className="bg-transparent border-2 border-blue-500 py-2 px-4 mx-auto block hover:bg-blue-500 hover:text-white rounded-lg"
            onClick={async () => {
                const res = await fetch('/api/checkout', {
                    method: 'POST',
                    body: JSON.stringify({
                        priceId
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                window.location.href = data.url
                console.log(data);
            }}
        >Comprar
        </button>
    );
}
export default ButtonCheckout





