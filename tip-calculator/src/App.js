import { useState } from "react";

export default function App() {
  const [billAmt, setBillAmt] = useState("");
  const [selfPercent, setSelfPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);

  function handleBillAmt(bill) {
    setBillAmt(bill);
  }
  function handleSelfPercent(value) {
    setSelfPercent(value);
  }
  function handleFriendPercent(value) {
    setFriendPercent(value);
  }
  function handleReset() {
    setBillAmt("");
    setSelfPercent(0);
    setFriendPercent(0);
  }

  return (
    <div>
      <Bill onBillAmt={handleBillAmt} billAmt={billAmt} />
      <ServiceSelf
        selfPercent={selfPercent}
        onSelfPercent={handleSelfPercent}
      />
      <ServiceFriend
        friendPercent={friendPercent}
        onFriendPercent={handleFriendPercent}
      />
      <TotalBill
        billAmt={billAmt}
        selfPercent={selfPercent}
        friendPercent={friendPercent}
      />
      <Reset onHandleReset={handleReset} />
    </div>
  );
}

function Bill({ billAmt, onBillAmt }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="0"
        value={billAmt}
        onChange={(e) => onBillAmt(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceSelf({ selfPercent, onSelfPercent }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        value={selfPercent}
        onChange={(e) => onSelfPercent(e.target.value)}
      >
        <option value="0">It was bad (0%)</option>
        <option value=".05">It was ok (5%)</option>
        <option value=".1">It was good (10%)</option>
        <option value=".2">It was amazing! (20%)</option>
      </select>
    </div>
  );
}

function ServiceFriend({ friendPercent, onFriendPercent }) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        value={friendPercent}
        onChange={(e) => onFriendPercent(e.target.value)}
      >
        <option value="0">It was bad (0%)</option>
        <option value=".05">It was ok (5%)</option>
        <option value=".1">It was good (10%)</option>
        <option value=".2">It was amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ billAmt, selfPercent, friendPercent }) {
  return (
    <div>
      <strong>{`You pay ${
        billAmt +
        (billAmt * Number(selfPercent)) / 2 +
        (billAmt * Number(friendPercent)) / 2
      }($${billAmt} + $${
        (billAmt * Number(selfPercent)) / 2 +
        (billAmt * Number(friendPercent)) / 2
      } tip)`}</strong>
    </div>
  );
}

function Reset({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}
