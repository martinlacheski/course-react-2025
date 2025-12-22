import { ItemCounter } from "./component/item-counter/ItemCounter";
import { TitleApp } from "./component/TitleApp";

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const itemsInCart: Item[] = [
  { id: 1, name: "Harina", quantity: 1 },
  { id: 2, name: "Azúcar", quantity: 1 },
  { id: 3, name: "Leche", quantity: 1 },
  { id: 4, name: "Mantequilla", quantity: 1 },
  { id: 5, name: "Queso", quantity: 1 },
  { id: 6, name: "Tomate", quantity: 8 },
  { id: 7, name: "Pollo", quantity: 1 },
];

export function FirstStepsApp() {
  return (
    <>
      <TitleApp />
      {itemsInCart.map((item) => (
        <ItemCounter key={item.id} name={item.name} quantity={item.quantity} />
      ))}
    </>
  );
}
