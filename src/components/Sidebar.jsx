import React from "react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  if (!showSidebar) {
    return (
      <div className="sidebar-toggle-closed">
        <button onClick={() => setShowSidebar(true)} className="toggle-btn">
          ▶
        </button>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <button onClick={() => setShowSidebar(false)} className="toggle-btn">
        ◀
      </button>
      <h2>🚗 CarRental</h2>
      <ul>
        <li><a href="#">🏠 Home</a></li>
        <li><a href="#">🚘 Cars</a></li>
        <li><a href="#">📄 About</a></li>
        <li><a href="#">📞 Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
