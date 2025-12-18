import { useState } from "react";
import "./ItemCounter.css";

// Se genera la interface ItemCounterProps para tipar los props
interface ItemCounterProps {
  name: string;
  quantity: number;
}

// Se genera el componente Counter que recibe los props
const Counter = (props: ItemCounterProps) => {
  // Se genera el estado para manejar el estado de la cantidad
  const [quantity, setQuantity] = useState(props.quantity);
  // Se genera los metodos para decrementar y incrementar la cantidad
  const handleDecrement = () => {
    // Se verifica que la cantidad sea mayor a 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="item-row">
      <span
        className="item-name"
        style={{ color: quantity === 1 ? "red" : "black" }}
      >
        {props.name}
      </span>
      <button className="item-button" onClick={handleDecrement}>
        -1
      </button>
      <span>{quantity}</span>
      <button className="item-button" onClick={handleIncrement}>
        +1
      </button>
    </section>
  );
};

// Se genera el componente ItemCounter que recibe los props y se exporta para ser usado en otros componentes
export const ItemCounter = (props: ItemCounterProps) => {
  return <Counter name={props.name} quantity={props.quantity} />;
};
