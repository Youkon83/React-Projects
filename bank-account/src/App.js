import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "opened":
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "grantLoan":
      return {
        ...state,
        loan: state.loan === 0 ? action.payload : state.loan,
        balance:
          state.loan === 0 ? state.balance + action.payload : state.balance,
      };
    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "close":
      return {
        ...state,
        isActive: state.balance === 0 && state.loan === 0 ? false : true,
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      {isActive ? <p>Balance: {balance}</p> : <p>Balance: X</p>}
      {isActive ? <p>Loan: {loan}</p> : <p>Loan: X</p>}

      <p>
        <button
          onClick={() => dispatch({ type: "opened" })}
          disabled={isActive ? true : false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={isActive ? false : true}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={isActive ? false : true}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "grantLoan", payload: 5000 })}
          disabled={isActive ? false : true}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={isActive ? false : true}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "close" })}
          disabled={isActive ? false : true}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
