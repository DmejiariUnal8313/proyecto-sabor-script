import Link from 'next/link';

export default function SelectPizzas() {
  return (
    <div>
      <h1>Seleccionar Pizzas</h1>
      <p>Seleccione las pizzas y tamaños que desea pedir.</p>
      <Link href="/bebidas">
        <button>Siguiente: Seleccionar Bebidas</button>
      </Link>
    </div>
  );
}