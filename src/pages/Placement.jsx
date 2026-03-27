import React from "react";

function Placement() {
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 min-h-screen">

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Placements
      </h1>

      {/* ===== STATS ===== */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Highest Package</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₹45 LPA</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Average Package</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₹8.5 LPA</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">Placement Rate</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">92%</p>
        </div>

      </div>

      {/* ===== TOP RECRUITERS ===== */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Top Recruiters
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="h-10 mx-auto"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
            alt="Microsoft"
            className="h-10 mx-auto"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-10 mx-auto bg-white p-1 rounded"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
            alt="Meta"
            className="h-10 mx-auto"
          />
        </div>
      </div>

      {/* ===== YEAR-WISE RECORD ===== */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Year-wise Placement Record
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 text-gray-600 dark:text-gray-300">Year</th>
                <th className="py-3 text-gray-600 dark:text-gray-300">Highest</th>
                <th className="py-3 text-gray-600 dark:text-gray-300">Average</th>
                <th className="py-3 text-gray-600 dark:text-gray-300">Placement %</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 text-gray-800 dark:text-gray-200">2025</td>
                <td>₹45 LPA</td>
                <td>₹8.5 LPA</td>
                <td>92%</td>
              </tr>

              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 text-gray-800 dark:text-gray-200">2024</td>
                <td>₹38 LPA</td>
                <td>₹7.9 LPA</td>
                <td>89%</td>
              </tr>

              <tr>
                <td className="py-3 text-gray-800 dark:text-gray-200">2023</td>
                <td>₹32 LPA</td>
                <td>₹7.2 LPA</td>
                <td>85%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Placement;