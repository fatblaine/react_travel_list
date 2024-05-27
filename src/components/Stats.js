export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list☝️ !</em>
      </footer>
    );
  }

  const packedAmount = items.reduce(
    (total, item) => (item.packed ? total + 1 : total),
    0
  );

  const packedPercentage = ((packedAmount / items.length) * 100).toFixed(2);

  return (
    <footer className="stats">
      <em>
        {packedPercentage >= 100
          ? "You've got everything ready to go 😊!"
          : `🧰 You have ${items.length} items on your list, and you have already
        packed ${packedAmount} (${packedPercentage}%).`}
      </em>
    </footer>
  );
}
