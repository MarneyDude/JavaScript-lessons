// Задача 1.

// Станція з продажу ремонтних дронів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дронів • pricePerDroid — другий параметр, число, що містить вартість одного дронів
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дронів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дронів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дронів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
