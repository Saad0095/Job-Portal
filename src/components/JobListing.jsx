import React from 'react';
import { jobsData } from './JobsData';

const JobListing = () => {
  return (
    <div className="bg-white py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Job Listings</h1>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-500 mb-4">{job.job_type}</p>
            <p className="text-gray-700">{job.description}</p>
            <p className="text-gray-600 mt-2 font-semibold">{job.salary}</p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
