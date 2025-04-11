
// import { FaSearch, FaChevronDown } from "react-icons/fa";

// const TopSide = () => {
//   return (
//     <div className="w-full bg-gray-50 px-6 py-3 flex justify-between items-center">
//       {/* Title */}
//       <h1 className="text-xl font-semibold text-gray-800">Dua Page</h1>

//       {/* Search Input */}
//       <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <input
//           type="text"
//           placeholder="Search by Dua Name"
//           className="px-4 py-2 w-64 focus:outline-none"
//         />
//         <button className="bg-gray-100 px-4 py-2 text-gray-500 hover:text-gray-700">
//           <FaSearch />
//         </button>
//       </div>

//       {/* Profile Icon with Dropdown */}
//       <div className="flex items-center gap-1">
//         <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
//           <img
//             src="https://i.ibb.co/tbmL1Jy/user.png" // you can replace this with any profile icon
//             alt="profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <FaChevronDown className="text-gray-500 text-sm" />
//       </div>
//     </div>
//   );
// };

// export default TopSide;











import { FaSearch, FaChevronDown } from "react-icons/fa";

const TopSide = ({ onToggleSettings }) => {
  return (
    <div className="w-full bg-gray-50 px-6 py-3 flex justify-between items-center">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800">Dua Page</h1>

      {/* Search Input */}
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="px-4 py-2 w-64 focus:outline-none"
        />
        <button className="bg-gray-100 px-4 py-2 text-gray-500 hover:text-gray-700">
          <FaSearch />
        </button>
      </div>

      {/* Profile Icon with Dropdown */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={onToggleSettings}
      >
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          <img
            src="https://i.ibb.co/tbmL1Jy/user.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <FaChevronDown className="text-gray-500 text-sm" />
      </div>
    </div>
  );
};

export default TopSide;
