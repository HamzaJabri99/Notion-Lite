import React from "react";
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="notion-lite" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>mode icon!</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
