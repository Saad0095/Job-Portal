import React, { useState } from "react";
import { jobsData } from "./JobsData";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const JobListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery) ||
      job.company.toLowerCase().includes(searchQuery) ||
      job.category.toLowerCase().includes(searchQuery) ||
      job.location.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Job Listings
      </h1>
      <div className="flex justify-center mb-6">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 p-3 pl-10 rounded-lg w-full focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-green-500"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-700 font-medium mb-1">{job.company}</p>

              {/* <p className="text-gray-600 mb-1">{job.category}</p> */}
              <p className="text-gray-700 mb-2">{job.description}</p>
              <p className="text-gray-700 mb-1">
                <span className="font-bold">Location: </span> {job.location}
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                Salary: {job.salary}
              </p>

              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200" onClick={()=> navigate('/apply')}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 mt-6 text-center">No jobs found.</p>
      )}
    </div>
  );
};

export default JobListing;
