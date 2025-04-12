import React, { useState } from "react";
import { FaLanguage, FaLock, FaFont, FaThLarge, FaUserCircle, FaSortDown } from "react-icons/fa";

const SettingsSidebar = () => {
  const [activeTab, setActiveTab] = useState("Appearance Settings");
  const [nightMode, setNightMode] = useState(false);

  const tabs = [
    {
      name: "Language Settings",
      icon: <FaLanguage className="w-5 h-5 mr-3 opacity-70" />,
    },
    {
      name: "General Settings",
      icon: <FaLock className="w-5 h-5 mr-3 opacity-70" />,
    },
    {
      name: "Font Settings",
      icon: <FaFont className="w-5 h-5 mr-3 opacity-70" />,
    },
    {
      name: "Appearance Settings",
      icon: <FaThLarge className="w-5 h-5 mr-3 opacity-70" />,
    },
  ];

  return (
    <div className="w-[290px] bg-[#f9fafb] p-4 rounded-xl shadow-sm flex flex-col items-center min-h-screen">
      <div className="flex items-center justify-end w-full mb-4">
        <FaUserCircle className="w-10 h-10 text-gray-500" />
        <div className="ml-1 cursor-pointer"><FaSortDown /></div>
      </div>

      <h2 className="text-lg font-semibold mb-4">Settings</h2>

      <div className="space-y-2 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              flex items-center w-full px-3 py-2 rounded-lg transition
              ${
                activeTab === tab.name
                  ? "bg-white border-l-4 border-green-500 text-green-600 font-medium"
                  : "bg-[#f3f4f6] text-gray-600"
              }
            `}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === "Appearance Settings" && (
        <div className="mt-6 w-full pl-8">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Night Mode</span>
            <label className="inline-flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={nightMode}
                onChange={() => setNightMode(!nightMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsSidebar;
