import React, { useState, useEffect } from "react";
import JobListings from "../components/JobListing";
import { jobsData } from "../components/JobsData";
import TextAnimation from "../components/TextAnimation";

import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

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
        job.category.toLowerCase().includes(searchQuery)) &&
      job.location.toLowerCase().includes(locationQuery)
    );
  });

  return (
    <div className="bg-white p-6 min-h-screen">
      <div className="my-20">
        <TextAnimation />
        <SearchBar
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchChange}
          handleLocationQuery={handleLocationQuery}
        />
      </div>
      {filteredJobs.length > 0 ? (
        <JobListings filteredJobs={filteredJobs} />
      ) : (
        <p className="text-red-500 mt-6 text-center">No jobs found.</p>
      )}
    </div>
  );
};

export default Home;
