import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobListing = ({filteredJobs}) => {
  const navigate = useNavigate();

  return (
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
  )
}

export default JobListing
