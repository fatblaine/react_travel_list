import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: false },
  { id: 2, description: "ID Card", quantity: 1, packed: false },
  { id: 3, description: "Charger", quantity: 4, packed: false },
  { id: 4, description: "Airpods", quantity: 1, packed: false },
  { id: 5, description: "Shaver", quantity: 1, packed: false },
  { id: 6, description: "IPad", quantity: 1, packed: false },
  { id: 7, description: "IPhone", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const comfirmed = window.confirm("Are you sure to delete all the items?");
    if (comfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
