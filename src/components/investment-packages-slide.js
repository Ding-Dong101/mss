import "../css/investmentComponent.css";
import PackageItem from "./packageItem";
function InvestmentPackages() {
  return (
    <>
      <label htmlFor="slide" className="bold investmentLabel">
        Investment Packages
      </label>
      <div className="slide">
        <PackageItem />
        <PackageItem />
        <PackageItem />
        <PackageItem />
        <PackageItem />
        <PackageItem />
      </div>
    </>
  );
}

export default InvestmentPackages;
