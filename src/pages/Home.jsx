import React, { useState, useEffect } from "react";
import JobListings from "../components/JobListing";
import { jobsData } from "../app/JobsData";
import TextAnimation from "../components/TextAnimation";

import SearchBar from "../components/SearchBar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [jobsList, setJobsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLocationQuery = (event) => {
    console.log(event.target.value);
    setLocationQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log(jobsData);
    setJobsList(jobsData);
  }, []);

  useEffect(() => {
    const filteredJobs = jobsData.filter(
      (job) =>
        (job.title.toLowerCase().includes(searchQuery) ||
          job.company.toLowerCase().includes(searchQuery) ||
          job.category.toLowerCase().includes(searchQuery)) &&
        job.location.toLowerCase().includes(locationQuery)
    );
    setJobsList(filteredJobs);
  }, [searchQuery, locationQuery]);

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
      {jobsList.length > 0 ? (
        <JobListings jobsList={jobsList} />
      ) : (
        <p className="text-red-500 mt-6 text-center">{t("noJobsFound")}</p>
      )}
    </div>
  );
};

export default Home;
