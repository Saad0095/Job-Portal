import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({searchQuery,handleSearchQuery,handleLocationQuery}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
        <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchQuery}
            onChange={handleSearchQuery}
            className="border rounded-r-none border-gray-300 p-3 pl-10 rounded-lg w-full h-12 focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out"
          />

        </div>
        <div className="relative">
          <select
            name=""
            id=""
            className="border rounded-l-none border-gray-300 p-3 pl-10 rounded-lg w-full h-12 focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out"
            onChange={handleLocationQuery}
          >
            <option value=""></option>
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Multan">Multan</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="San Fransisco">San Fransisco</option>
            <option value="Texas">Texas</option>
          </select>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
