import React, { useState } from "react";

interface DropdownCardProps {
  title: string;
  children: React.ReactNode;
}

const DropdownCard = ({ title, children }: DropdownCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-card">
      <div className="dropdown-card-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <span className={`dropdown-card-icon ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      <div className={`dropdown-card-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DropdownCard;
