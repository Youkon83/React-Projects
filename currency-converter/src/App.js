import { useEffect, useState } from "react";

export default function App() {
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [amount, setAmount] = useState(20);
  const [conversion, setConversion] = useState("");

  useEffect(
    function () {
      async function fetchCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
        );
        const data = await res.json();
        setConversion(data.rates[currency2]);
      }

      if (amount < 1) {
        setAmount(1);
        return setConversion(1);
      }
      if (currency1 === currency2) return setConversion(amount);

      fetchCurrency();
    },
    [amount, currency1, currency2]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {conversion} {currency2}
      </p>
    </div>
  );
}
