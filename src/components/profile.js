import React from "react";
import { FaBell } from "react-icons/fa";
import "../css/profile.css";

let userImage = "http://picsum.photos/50/50";
let userName = "John Doe";
let accountBalance = 5000.05;
let WithdrawableAmount = 4000.02;
let nationality = "🇬🇭";

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-object">
            <img src={userImage} alt="user profile" />
            <div className="greeting">
              <p>
                Hello,<span className="bold">{" " + userName}</span>
                <span> {nationality}</span>
              </p>
            </div>
          </div>
          <button className="notification-btn btn">
            <FaBell size={24} />
          </button>
        </div>
        <div className="account-details">
          <div className="account-balance account">
            <p>Account Balance</p>
            <p className="bold money">{"GHC " + accountBalance}</p>
          </div>
          <div className="withdraw-balance">
            <p>Withdrawable Amount</p>
            <p className="bold money">{"GHC " + WithdrawableAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
}
