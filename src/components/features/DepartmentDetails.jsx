import React from "react";
import { useParams } from "react-router-dom";
import { departmentsData } from "../../data/departmentsData";

const DepartmentDetails = () => {
  const { name } = useParams();

  const dept = departmentsData.find(d => d.slug === name);

  if (!dept) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Department not found
      </div>
    );
  }

  return (
    <div className="mt-8 bg-[#0f172a] p-6 md:p-10 rounded-2xl max-w-5xl mx-auto">

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {dept.name} Department
      </h1>

      <p className="text-gray-300 mb-4">{dept.about}</p>

      <h2 className="text-blue-400 mt-4">Vision</h2>
      <p className="text-gray-300">{dept.vision}</p>

      <h2 className="text-blue-400 mt-4">Programs</h2>
      <ul className="text-gray-300 list-disc ml-6">
        {dept.programs.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2 className="text-blue-400 mt-4">Faculty</h2>
      <ul className="text-gray-300 list-disc ml-6">
        {dept.faculty.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <h2 className="text-blue-400 mt-4">Labs</h2>
      <p className="text-gray-300">{dept.labs}</p>

      <h2 className="text-blue-400 mt-4">Contact</h2>
      <p className="text-gray-300">
        {dept.hod} <br />
        {dept.email} <br />
        {dept.phone}
      </p>

    </div>
  );
};

export default DepartmentDetails;