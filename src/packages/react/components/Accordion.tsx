import React, { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: Props) => {
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
