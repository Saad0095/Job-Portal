import React, { useState, useEffect } from "react";
import { jobsData } from "./JobsData";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const JobListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  // const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLocationQuery = (event) => {
    console.log(event.target.value);
    setLocationQuery(event.target.value.toLowerCase());
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      (job.title.toLowerCase().includes(searchQuery) ||
      job.company.toLowerCase().includes(searchQuery) ||
      job.category.toLowerCase().includes(searchQuery) ) && job.location.toLowerCase().includes(locationQuery)
    );
  });


  return (
    <div className="bg-white p-6 min-h-screen">
      <div className="header my-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-950 text-center">
          <TypeAnimation
            sequence={[
              "Find Your Dream Job!",
              5000,
              "Discover Your Ideal Role!",
              5000,
              "Land the Job You Deserve!",
              5000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="flex justify-center items-center">
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border rounded-r-none border-gray-300 p-3 pl-10 rounded-lg w-full h-12  focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#f9fff8] border border-gray-200 rounded-lg shadow-sm p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-green-500"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-700 font-medium mb-1">{job.company}</p>
              <p className="text-gray-700 mb-2">{job.description}</p>
              <p className="text-gray-700 mb-1">
                <span className="font-bold">Location: </span> {job.location}
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                Salary: {job.salary}
              </p>

              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                onClick={() => navigate("/apply")}
              >
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
