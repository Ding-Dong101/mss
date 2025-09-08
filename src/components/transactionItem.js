import { FaCheck, FaTimesCircle } from "react-icons/fa";
import "../css/transactionItem.css";

export function TransactionItem({ receipient, sucess }) {
  return (
    <div className="transactionItem">
      {sucess ? (
        <FaCheck className="successIcon" color="green" size={24} />
      ) : (
        <FaTimesCircle className="failedIcon" color="red" size={24} />
      )}
      <div className="transactionDetails">
        <p className="itemName">Payment made to {receipient}</p>
      </div>
    </div>
  );
}
