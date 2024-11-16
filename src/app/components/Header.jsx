import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-red-500 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl">Mi Tienda</h1>
        <Link href="/shoppingcard">
          <Image
          src="/icons8-carrito-de-compras-64.png"
          alt='Carrito de compras'
          width={45}
          height={45} />
        </Link>
      </nav>
    </header>
  );
}
