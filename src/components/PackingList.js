import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed status")
    sortedItems = items.sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed status">Sort by packed status</option>
        </select>

        <button onClick={onClear}>CLEAR LIST</button>
      </div>
    </div>
  );
}
