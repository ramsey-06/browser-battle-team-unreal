import React from "react";
import { useParams } from "react-router-dom";
import { departmentsData } from "../../data/departmentsData";

const DepartmentDetails = () => {
  const { name } = useParams();

  // Find department using slug
  const dept = departmentsData.find(d => d.slug === name);

  if (!dept) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Department not found
      </div>
    );
  }

  return (
    <div className="mt-8 bg-[#0f172a] p-6 md:p-10 rounded-2xl shadow-xl border border-gray-700 max-w-5xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {dept.name} Department
      </h1>

      {/* About */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">About</h2>
        <p className="text-gray-300">{dept.about}</p>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">Vision</h2>
        <p className="text-gray-300">{dept.vision}</p>
      </div>

      {/* Programs */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">Programs</h2>
        <ul className="list-disc ml-6 text-gray-300">
          {dept.programs.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Faculty */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">Faculty</h2>
        <ul className="list-disc ml-6 text-gray-300">
          {dept.faculty.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Labs */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Labs & Research
        </h2>
        <p className="text-gray-300">{dept.labs}</p>
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-xl font-semibold text-blue-400 mb-2">
          Contact (Department Chair)
        </h2>
        <p className="text-gray-300">
          {dept.hod} <br />
          📧 {dept.email} <br />
          📞 {dept.phone}
        </p>
      </div>

    </div>
  );
};

export default DepartmentDetails;