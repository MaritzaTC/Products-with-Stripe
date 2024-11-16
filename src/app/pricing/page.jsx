
import { Stripe } from 'stripe';
import ButtonCheckout from '../components/ButtonCheckout';
import ButtonShoppingCard from '../components/ButtonShoppingCard';
import Link from 'next/link';
import Header from '../components/Header';
async function loadPrices() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const pricesData = await stripe.prices.list();

    const pricesWithProductNames = await Promise.all(
        pricesData.data.map(async (price) => {
            const product = await stripe.products.retrieve(price.product);
            return {
                id: price.id,
                unit_amount: price.unit_amount,
                currency: price.currency,
                productName: product.name,
                image: product.images[0]
            };
        })
    );
    return pricesWithProductNames
}
async function PricingPage() {
    const prices = await loadPrices();
    return (
        <div className="p-5" >
            <div>
                <Header></Header>
                <header><h1 className="text-center my-5 text-3xl font-bold">Tecnología</h1></header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        prices.map(price => (
                            <div key={price.id} className="max-w-sm  border-2  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                                <img src={price.image} alt={price.productName} className="rounded-t-lg" />
                                <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                                    <h2 className="text-center">{price.productName}</h2>
                                </div>
                                <h2 ><p className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Precio: {(price.unit_amount / 100).toFixed(2)} $
                                </p></h2>
                                <ButtonCheckout priceId={price.id} />
                                <ButtonShoppingCard priceId={price.id} image={price.image} name={price.productName} price= {(price.unit_amount / 100).toFixed(2)}/>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
export default PricingPage;