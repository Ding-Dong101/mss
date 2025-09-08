import { TransactionItem } from "./transactionItem";

export default function TransactionList() {
  let sucess = false;
  let receipient = "Smith Waters";
  return (
    <>
      <label htmlFor="transactionItems" className="bold">
        Transactions
      </label>
      <div className="transactionItemContainer">
        <TransactionItem sucess={true} receipient={receipient} />
        <TransactionItem sucess={sucess} receipient={receipient} />
        <TransactionItem sucess={true} receipient={receipient} />
        <TransactionItem sucess={sucess} receipient={receipient} />
      </div>
    </>
  );
}
