// pages/bebidas.js
import Link from 'next/link';

export default function SelectBebidas() {
  return (
    <div>
      <h1>Seleccionar Bebidas</h1>
      <p>Seleccione las bebidas que desea pedir.</p>
      <Link href="/confirmar">
        <button>Siguiente: Confirmar Pedido</button>
      </Link>
    </div>
  );
}