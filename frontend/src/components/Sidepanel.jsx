
import React from "react";

const SidePanel = () => {
  return (
    <div className="absolute top-16 left-0 bottom-0 w-64 bg-gray-400 p-4">
      <h3 className="text-lg font-semibold mb-4">Side Panel</h3>
      <ul>
        <li className="mb-2">Explore</li>
        <li className="mb-2">Profile</li>
        <li className="mb-2">Chats</li>
       <li className="mb-2">Post item</li>
        <li className="mb-2">Help & Report</li>
    
      </ul>
    </div>
  );
};

export default SidePanel;


