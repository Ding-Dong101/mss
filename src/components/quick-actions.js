import React from "react";
import { FaPlus, FaMinus, FaWallet } from "react-icons/fa";
import "../css/quick-actions.css";
function QuickActions() {
  return (
    <div className="quick-actions">
      <button className="action-btn btn">
        <FaPlus size={24} />
      </button>
      <button className="action-btn btn">
        <FaMinus size={24} />
      </button>

      <button className="action-btn btn">
        <FaWallet size={24} />
      </button>
    </div>
  );
}

export default QuickActions;
