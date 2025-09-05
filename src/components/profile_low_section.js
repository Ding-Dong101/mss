import InvestmentPackages from "./investment-packages-slide";
import "../css/lowSection.css";
import TransactionList from "./transactionsList";

export default function Profile_low_section() {
  return (
    <div className="lowSection">
      <InvestmentPackages />
      <TransactionList />
    </div>
  );
}
