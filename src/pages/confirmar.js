// pages/confirmar.js
import Link from 'next/link';

export default function ConfirmOrder() {
  return (
    <div>
      <h1>Confirmar Pedido</h1>
      <p>Revise su pedido antes de confirmar.</p>
      <Link href="/final">
        <button>Confirmar Pedido</button>
      </Link>
    </div>
  );
}