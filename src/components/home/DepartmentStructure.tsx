import React from "react";
import { FaSitemap } from "react-icons/fa";

export const DepartmentStructure: React.FC = () => {
  const departments = [
    {
      id: 1,
      title: "Learning Solutions",
      lead: "Lead, Learning",
      roles: ["Instructional Designer", "LMS Admin", "Trainer Pool"],
      color: "blue",
    },
    {
      id: 2,
      title: "Organization Development",
      lead: "Lead, OD",
      roles: ["OD Specialist", "Change Partner"],
      color: "emerald",
    },
    {
      id: 3,
      title: "Analytics & Quality",
      lead: "Lead, Analytics",
      roles: ["Data Analyst", "Training QA"],
      color: "purple",
    },
    {
      id: 4,
      title: "Operations",
      lead: "Lead, Ops",
      roles: ["Coordinator", "Logistics"],
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
          border: "border-blue-100",
          title: "text-blue-800",
          lead: "text-blue-600",
          hover: "hover:shadow-blue-100",
        };
      case "emerald":
        return {
          bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
          border: "border-emerald-100",
          title: "text-emerald-800",
          lead: "text-emerald-600",
          hover: "hover:shadow-emerald-100",
        };
      case "purple":
        return {
          bg: "bg-gradient-to-br from-purple-50 to-violet-50",
          border: "border-purple-100",
          title: "text-purple-800",
          lead: "text-purple-600",
          hover: "hover:shadow-purple-100",
        };
      case "orange":
        return {
          bg: "bg-gradient-to-br from-orange-50 to-amber-50",
          border: "border-orange-100",
          title: "text-orange-800",
          lead: "text-orange-600",
          hover: "hover:shadow-orange-100",
        };
      default:
        return {
          bg: "bg-white",
          border: "border-gray-100",
          title: "text-gray-800",
          lead: "text-gray-600",
          hover: "hover:shadow-gray-100",
        };
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <FaSitemap className="text-white text-xl" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Department Structure
              </h1>
              <p className="text-lg text-slate-600">Organogram</p>
            </div>
          </div>
        </div>

        {/* Organogram */}
        <div className="flex flex-col items-center relative">
          {/* Head Position */}
          <div className="text-center rounded border border-slate-200 p-6 mb-8 z-10 hover:shadow-md transition-shadow duration-300">
            <p className="text-sm text-slate-600 mb-1 ">Department Head</p>
            <h2 className="text-xl font-bold text-slate-800">Head of T&OD</h2>
          </div>

          {/* SVG Connecting Lines */}
          <div className="absolute top-[102px] left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-32 z-0">
            <svg width="100%" height="100%" className="overflow-visible">
              {/* Vertical line from head */}
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="40"
                stroke="#6366F1"
                strokeWidth="3"
              />

              {/* Horizontal line connecting to departments */}
              <line
                x1="12.5%"
                y1="40"
                x2="87.5%"
                y2="40"
                stroke="#6366F1"
                strokeWidth="3"
              />

              {/* Vertical lines to each department */}
              <line
                x1="12.5%"
                y1="40"
                x2="12.5%"
                y2="80"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              <line
                x1="37.5%"
                y1="40"
                x2="37.5%"
                y2="80"
                stroke="#10B981"
                strokeWidth="3"
              />
              <line
                x1="62.5%"
                y1="40"
                x2="62.5%"
                y2="80"
                stroke="#8B5CF6"
                strokeWidth="3"
              />
              <line
                x1="87.5%"
                y1="40"
                x2="87.5%"
                y2="80"
                stroke="#F59E0B"
                strokeWidth="3"
              />
            </svg>
          </div>

          {/* Department Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-12">
            {departments.map((dept) => {
              const colors = getColorClasses(dept.color);
              return (
                <div
                  key={dept.id}
                  className={`${colors.bg} rounded border ${colors.border} p-6 z-10 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <h3 className={`text-lg font-bold ${colors.title} mb-2`}>
                    {dept.title}
                  </h3>
                  <p className={`text-sm ${colors.lead} mb-4 font-medium`}>
                    {dept.lead}
                  </p>
                  <ul className="space-y-2">
                    {dept.roles.map((role, index) => (
                      <li
                        key={index}
                        className="text-sm text-slate-700 flex items-center"
                      >
                        <span
                          className={`w-1.5 h-1.5 ${colors.title.replace(
                            "text-",
                            "bg-"
                          )} rounded-full mr-2`}
                        ></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
