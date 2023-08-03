import { useState } from "react";

export default function App() {
  const [toast, setToast] = useState(false);
  const [toastNum, setToastNum] = useState(0);

  function handleToast() {
    setToastNum(toastNum + 1);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  }
  return (
    <div>
      <Button onHandleToast={handleToast} />
      {toast ? (
        <div className="toasts">
          <Toast toastNum={toastNum} />
        </div>
      ) : null}
    </div>
  );
}

function Button({ onHandleToast }) {
  return (
    <div>
      <button className="btn" onClick={onHandleToast}>
        Show Toast Notification
      </button>
    </div>
  );
}

function Toast({ toastNum }) {
  return <div className="toast">Toast Message {toastNum}</div>;
}
