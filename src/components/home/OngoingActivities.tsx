import React from "react";
import { FaChartLine } from "react-icons/fa";

export const OngoingActivities: React.FC = () => {
  const quarters = [
    {
      quarter: "Q1 2025",
      activities: [
        "Leadership Academy Cohort 4",
        "OSH Refresher for factories",
        "LMS migration",
      ],
    },
    {
      quarter: "Q2 2025",
      activities: [
        "Power BI rollout — Supply Chain",
        "Mentor program",
        "Train-the-Trainer",
      ],
    },
    {
      quarter: "Q3 2025",
      activities: [
        "Project Management bootcamps",
        "Engagement survey debriefs",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <FaChartLine className="text-white text-xl" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Ongoing Activities
            </h2>
          </div>
          <p className="text-xl text-gray-600">Quarterly view of initiatives</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section - 50% */}
          <div className="space-y-8">
            {/* Timeline */}
            <div className="relative">
              {/* Fancy Vertical Line with Gradient */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {quarters.map((quarter, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Simple Timeline Dot */}
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm flex-shrink-0 mt-1"></div>

                    {/* Simple Content */}
                    <div className="ml-6 bg-gray-50 rounded-lg border border-gray-200 p-5 w-full">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {quarter.quarter}
                      </h3>
                      <ul className="space-y-2">
                        {quarter.activities.map((activity, activityIndex) => (
                          <li
                            key={activityIndex}
                            className="flex items-start text-gray-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - 50% */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces"
                  alt="Team training session"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Leadership Training</p>
                </div>
              </div>

              {/* Top Right Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces"
                  alt="Data analytics training"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Data Analytics</p>
                </div>
              </div>

              {/* Bottom Left Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&crop=faces"
                  alt="Online learning session"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Virtual Learning</p>
                </div>
              </div>

              {/* Bottom Right Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=faces"
                  alt="Workshop session"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Workshop</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
