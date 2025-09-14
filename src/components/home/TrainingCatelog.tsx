import React from "react";
import { FaChevronRight, FaFilter, FaSearch } from "react-icons/fa";

export const TrainingCatalog: React.FC = () => {
  const trainingCategories = [
    {
      title: "Leadership & Management",
      topicCount: 3,
      color: "blue",
      courses: [
        {
          title: "First-Time Manager",
          code: "LM101",
          duration: "2 days",
          level: "Beginner",
        },
        {
          title: "Coaching Conversations",
          code: "LM201",
          duration: "1 day",
          level: "Intermediate",
        },
        {
          title: "Strategic Leadership",
          code: "LM301",
          duration: "2 days",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Digital & Analytics",
      topicCount: 3,
      color: "green",
      courses: [
        {
          title: "Excel Essentials",
          code: "DA101",
          duration: "1 day",
          level: "Beginner",
        },
        {
          title: "Power BI for Business",
          code: "DA201",
          duration: "2 days",
          level: "Intermediate",
        },
        {
          title: "Data Storytelling",
          code: "DA301",
          duration: "1 day",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Compliance & Safety",
      topicCount: 4,
      color: "purple",
      courses: [
        {
          title: "OSH Awareness",
          code: "CS101",
          duration: "0.5 day",
          level: "All",
        },
        {
          title: "Anti-Harassment",
          code: "CS201",
          duration: "0.5 day",
          level: "All",
        },
        {
          title: "5S & Housekeeping",
          code: "CS301",
          duration: "0.5 day",
          level: "All",
        },
        {
          title: "Grievance Redressal",
          code: "CS401",
          duration: "0.5 day",
          level: "All",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        header: "bg-blue-500",
        badge: "bg-blue-100 text-blue-700",
        button: "text-blue-600 hover:text-blue-700",
        accent: "border-blue-200",
      },
      green: {
        header: "bg-green-500",
        badge: "bg-green-100 text-green-700",
        button: "text-green-600 hover:text-green-700",
        accent: "border-green-200",
      },
      purple: {
        header: "bg-purple-500",
        badge: "bg-purple-100 text-purple-700",
        button: "text-purple-600 hover:text-purple-700",
        accent: "border-purple-200",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Training Catalog
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive learning programs for professional development
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title, code, or level"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md">
            <FaFilter className="h-4 w-4" />
            Filters
          </button>
        </div>

        {/* Training Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainingCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 ${colors.header} rounded-full`}
                    ></div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h2>
                  </div>
                  <p
                    className={`${colors.badge} w-[90px] text-center text-sm font-medium px-3 py-1 rounded-full`}
                  >
                    {category.topicCount} topics
                  </p>
                </div>

                {/* Courses List */}
                <div className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 border-l-4 ${colors.accent} hover:shadow-sm`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {course.title}
                            <span className="text-gray-500 font-normal ml-1">
                              ({course.code})
                            </span>
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {course.duration} • {course.level}
                          </p>
                        </div>
                        <button
                          className={`flex items-center gap-1 ${colors.button} font-medium text-sm transition-colors duration-200`}
                        >
                          Outline
                          <FaChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
