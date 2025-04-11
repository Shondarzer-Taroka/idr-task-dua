// import LeftCategory from "../Layout/LeftCategory";
// import LeftSide from "../Layout/LeftSide";
// import TopSide from "../Layout/TopSide";



// const Homepage = () => {
//     return (
//         <div className="bg-[#f7f8fa] flex justify-start items-start">
//             <LeftSide />
//             <div className="max-w-7xl mx-auto">
//                 <TopSide />
//                 <LeftCategory />
//             </div>
//         </div>
//     );
// };

// export default Homepage;









import LeftCategory from "../Layout/LeftCategory";
import LeftSide from "../Layout/LeftSide";
import TopSide from "../Layout/TopSide";

const Homepage = () => {
  return (
    <div className="bg-[#f7f8fa] min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopSide />

      {/* Body Layout */}
      <div className="flex flex-1">
        {/* Left Icon Sidebar */}
        <LeftSide />

        {/* Main Section: Left Category + Main Content */}
        <div className="flex flex-col lg:flex-row w-full px-4 py-4 gap-4">
          {/* Left Category */}
          <div className="w-full lg:w-[350px]">
            <LeftCategory />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Main Content Area</h2>
            <p className="text-gray-700">
              This is where you can render your main dua content or other dynamic pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
