import React, { useState } from "react";
import { jobsData } from "./JobsData";

const JobListing = () => {
  
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
    <div className="bg-white p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Job Listings</h1>
      

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full md:w-1/2 focus:outline-none focus:border-green-500"
        />
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border p-4 rounded shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-600">{job.category}</p>
              <p className="text-gray-800">{job.description}</p>
              <p className="font-semibold mt-2">{job.salary}</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 mt-4">No jobs found.</p>
      )}
    </div>
  );
};

export default JobListing;
