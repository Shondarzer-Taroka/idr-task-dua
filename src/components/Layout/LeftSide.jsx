// import React from 'react';

// const LeftSide = () => {
//     return (
//         <div className="flex flex-col justify-between items-center bg-white rounded-l-3xl py-6 px-2 h-screen shadow-md">
//         {/* Top button */}
//         <button className="bg-green-500 text-white p-3 rounded-lg shadow-md">
//           <FaHandsHelping size={24} />
//         </button>
  
//         {/* Center Icons */}
//         <div className="flex flex-col gap-6 items-center mt-8">
//           <IconWrapper icon={<FaHome />} />
//           <IconWrapper icon={<FaTh />} />
//           <IconWrapper icon={<FaLightbulb />} />
//           <IconWrapper icon={<FaBookmark />} />
//           <IconWrapper icon={<FaFlask />} />
//           <IconWrapper icon={<FaSearch />} />
//           <IconWrapper icon={<FaBookOpen />} />
//         </div>
  
//         {/* Bottom button */}
//         <button className="bg-green-500 text-white p-3 rounded-lg shadow-md">
//           <FaPhone size={24} />
//         </button>
//       </div>
//     );
//   };
  
//   // Reusable IconWrapper Component
//   const IconWrapper = ({ icon }) => (
//     <div className="bg-gray-100 text-gray-500 p-3 rounded-full hover:text-black transition">
//       {icon}
//     </div>
//     );
// };

// export default LeftSide;









// Sidebar.jsx
import { FaHandsHelping, FaHome, FaTh, FaLightbulb, FaBookmark, FaFlask, FaSearch, FaBookOpen, FaPhone } from 'react-icons/fa';

const LeftSide = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-white rounded-l-3xl py-6 px-2 h-screen shadow-md">
      {/* Top button */}
      <button className="bg-green-500 text-white p-3 rounded-lg shadow-md">
        <FaHandsHelping size={24} />
      </button>

      {/* Center Icons */}
      <div className="flex flex-col gap-6 items-center mt-8">
        <IconWrapper icon={<FaHome />} />
        <IconWrapper icon={<FaTh />} />
        <IconWrapper icon={<FaLightbulb />} />
        <IconWrapper icon={<FaBookmark />} />
        <IconWrapper icon={<FaFlask />} />
        <IconWrapper icon={<FaSearch />} />
        <IconWrapper icon={<FaBookOpen />} />
      </div>

      {/* Bottom button */}
      <button className="bg-green-500 text-white p-3 rounded-lg shadow-md">
        <FaPhone size={24} />
      </button>
    </div>
  );
};

// Reusable IconWrapper Component
const IconWrapper = ({ icon }) => (
  <div className="bg-gray-100 text-gray-500 p-3 rounded-full hover:text-black transition">
    {icon}
  </div>
);

export default LeftSide;
