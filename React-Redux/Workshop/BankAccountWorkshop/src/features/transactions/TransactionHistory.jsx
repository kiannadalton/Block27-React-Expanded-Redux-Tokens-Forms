import "./transactionHistory.scss";
import { useSelector } from "react-redux";
import { selectHistory } from "./transactionsSlice";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => {
  return (
    <tr>
      <th scope="row">{type}</th>
      {/* this needs to be amount.amount or else it will error out since it's an object. */}
      <td>{amount.amount.toFixed(2)}</td>
      <td>{balance.toFixed(2)}</td>
    </tr>
  );
};

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector(selectHistory);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */}
          {history.map((transaction) => {
            return (
              <TransactionRow
                key={
                  transaction.balance + transaction.type + transaction.amount
                }
                transaction={transaction}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
