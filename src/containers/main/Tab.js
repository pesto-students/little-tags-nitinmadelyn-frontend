import React from "react";

export default function Tab({ onClick, isActive, label }) {
  return (
    <div className="col span-1-of-3 main-category">
      <a href="#" onClick={onClick} className={isActive ? "active" : ""}>
        {label}
      </a>
    </div>
  );
}
