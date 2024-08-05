// import React, { useState } from "react";
// import { jobsData } from "./JobsData";

// const JobListing = () => {
  
//   const [searchQuery, setSearchQuery] = useState("");


//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };


//   const filteredJobs = jobsData.filter((job) => {
//     return (
//       job.title.toLowerCase().includes(searchQuery) ||
//       job.company.toLowerCase().includes(searchQuery) ||
//       job.category.toLowerCase().includes(searchQuery) ||
//       job.location.toLowerCase().includes(searchQuery)
//     );
//   });

//   return (
//     <div className="bg-white p-4 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-green-600">Job Listings</h1>
      

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search jobs..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="border p-2 rounded w-full md:w-1/2 focus:outline-none focus:border-green-500"
//         />
//       </div>

//       {filteredJobs.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="border p-4 mb-4 rounded shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-green-500 bg-white "
//             >
//               <h2 className="text-xl font-semibold">{job.title}</h2>
//               <p className="text-gray-600">{job.company}</p>
//               <p className="text-gray-600">{job.location}</p>
//               <p className="text-gray-600">{job.category}</p>
//               <p className="text-gray-800">{job.description}</p>
//               <p className="font-semibold mt-2">{job.salary}</p>
//               <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-red-500 mt-4">No jobs found.</p>
//       )}
//     </div>
//   );
// };

// export default JobListing;


// src/components/JobListing.jsx

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
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Job Listings
      </h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 p-3 rounded-lg w-full md:w-2/3 lg:w-1/2 focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out"
        />
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
              <p className="text-gray-600 mb-1">{job.location}</p>
              <p className="text-gray-600 mb-1">{job.category}</p>
              <p className="text-gray-700 mb-2">{job.description}</p>
              <p className="font-semibold text-gray-800 mt-2">
                Salary: {job.salary}
              </p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                View Details
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
