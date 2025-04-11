






import { FaFlask } from 'react-icons/fa';

const LeftCategory = () => {
  return (
    <div className=" bg-gray-50 p-4 rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Dua Page</h1>

      {/* Categories Header */}
      <div className="bg-green-500 text-white text-center py-2 rounded-md font-medium mb-3">
        Categories
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Categories"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Top Dua Category Card */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <FaFlask className="text-red-400" size={24} />
          </div>
          <div>
            <p className="text-green-700 font-semibold">Introduction to Dua</p>
            <p className="text-xs text-gray-500">Subcategory: 11</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p className="font-semibold text-gray-800">15</p>
          <p>Duas</p>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative ml-6 border-l-2 border-dashed border-green-500 mb-6">
        {[
          "What is Dua",
          "Conditions for Dua to be successful",
          "The Methode Of Dua",
          "Before Dua",
          "During Dua",
          "Prerequisites of writing Dua and drinking it's water",
          "The correct way to perform Dua for a small child",
        ].map((item, index) => (
          <div key={index} className="mb-3 relative pl-4">
            <span className="absolute -left-[11px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            <p className={`${index === 0 ? 'text-green-600 font-medium' : 'text-gray-700'}`}>{item}</p>
          </div>
        ))}
      </div>

      {/* More Dua Cards */}
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-2"
        >
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-full">
              <FaFlask className="text-red-400" size={24} />
            </div>
            <div>
              <p className="text-green-700 font-semibold">Introduction to Dua</p>
              <p className="text-xs text-gray-500">Subcategory: 11</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p className="font-semibold text-gray-800">15</p>
            <p>Duas</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftCategory;
