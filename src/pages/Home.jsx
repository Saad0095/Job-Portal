import React, { useState, useEffect } from "react";
import JobListings from "../components/JobListing";
import TextAnimation from "../components/TextAnimation";
import SearchBar from "../components/SearchBar";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";

const Home = () => {
  const { t } = useTranslation();
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLocationQuery = (event) => {
    console.log(event.target.value);
    setLocationQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const jobsData = t("jobsData", { returnObjects: true });
    setJobsList(jobsData);
    setFilteredJobs(jobsData);
    setLoading(false);
  }, [t]);

  useEffect(() => {
    if (!loading){
      const filteredJobs = jobsList.filter(
        (job) =>
          (job.title.toLowerCase().includes(searchQuery) ||
        job.company.toLowerCase().includes(searchQuery) ||
        job.category.toLowerCase().includes(searchQuery)) &&
        job.location.toLowerCase().includes(locationQuery)
      );
      setFilteredJobs(filteredJobs);
    }
  }, [searchQuery, locationQuery, jobsList,loading]);

  if (loading) {
    return <Loading />;
  }

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
        <JobListings jobsList={filteredJobs} />
      ) : (
        <p className="text-red-500 mt-6 text-center">{t("noJobsFound")}</p>
      )}
    </div>
  );
};

export default Home;
