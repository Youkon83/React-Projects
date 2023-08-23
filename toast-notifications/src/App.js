import { useEffect, useState } from "react";

export default function App() {
  const [toast, setToast] = useState(false);
  const [toastNum, setToastNum] = useState(0);

  useEffect(
    function () {
      const id = setInterval(() => {
        setToast(false);
      }, 3000);
      return () => clearInterval(id);
    },
    [setToast]
  );

  function handleToast() {
    setToastNum((toastNum) => toastNum + 1);
    setToast((toast) => true);
  }
  return (
    <div>
      <Button onHandleToast={handleToast} />
      {toast ? <Toast toastNum={toastNum} key={toastNum} /> : null}
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
  return (
    <div className="toasts">
      <div className="toast">Toast Message {toastNum}</div>
    </div>
  );
}
