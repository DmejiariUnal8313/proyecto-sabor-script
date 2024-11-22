// pages/final.js
import Link from 'next/link';

export default function FinalScreen() {
  return (
    <div>
      <h1>Pedido Finalizado</h1>
      <p>Gracias por su pedido. Aquí está su factura.</p>
      <button>Imprimir Factura</button>
      <Link href="/">
        <button>Volver al Inicio</button>
      </Link>
    </div>
  );
}