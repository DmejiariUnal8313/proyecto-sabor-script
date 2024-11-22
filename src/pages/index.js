// pages/index.js
import Link from 'next/link';

export default function Welcome() {
  return (
    <div>
      <h1>Bienvenida</h1>
      <p>Bienvenido al sistema de pedidos de pizzas.</p>
      <Link href="/pizzas">
        <button>Siguiente: Seleccionar Pizzas</button>
      </Link>
    </div>
  );
}