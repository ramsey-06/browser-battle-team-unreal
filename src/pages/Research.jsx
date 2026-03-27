import React from "react";

function Research() {
  return (
    <div className="p-10 bg-gray-50 dark:bg-slate-900 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Research & Innovation
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* AI & ML */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden transition hover:shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1663050681752-4c95effcca58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D"
            alt="AI & ML"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              AI & ML
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Advanced research in artificial intelligence.
            </p>
          </div>
        </div>

        {/* Renewable Energy */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden transition hover:shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1764695573427-2929ec411c72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Renewable Energy"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              Renewable Energy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Focus on sustainable energy solutions.
            </p>
          </div>
        </div>

        {/* Healthcare Tech */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden transition hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1582560474992-385ebb9b29a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare Tech"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              Healthcare Tech
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Innovations in medical technology.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Research;