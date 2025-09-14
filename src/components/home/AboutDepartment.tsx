import React from "react";
import {
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export const AboutDepartment: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Department Profile
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            History, mission, vision & contacts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Who we are
              </h2>
              <p className="text-emerald-600 mb-6 font-medium">
                Established 2014 • DS-360 Center for Development
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                Founded in 2014 to standardize learning practices, the Training
                & OD Department has evolved from a small facilitation cell to a
                strategic partner enabling enterprise-wide capability building,
                culture development, and performance improvement. Key milestones
                include LMS rollout (2017), Leadership Academy launch (2019),
                and Analytics-led T&D planning (2022).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded p-6 border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">
                    Mission
                  </h3>
                  <p className="text-slate-700">
                    To develop people and systems that enable sustainable
                    business performance.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded p-6 border border-emerald-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">
                    Vision
                  </h3>
                  <p className="text-slate-700">
                    Every employee skilled, engaged, and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded border border-gray-200 p-8 h-fit hover:shadow-md transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Contact
              </h2>
              <p className="text-slate-600 mb-6">Reach the T&OD team</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div>
                    <span className="text-slate-600 font-medium">Email: </span>
                    <a
                      href="mailto:training-od@ds360.com"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    >
                      training-od@ds360.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <span className="text-slate-600 font-medium">Phone: </span>
                    <span className="text-slate-700">+880 1753-139834</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <span className="text-slate-600 font-medium">
                      Address:{" "}
                    </span>
                    <span className="text-slate-700">
                      Head Office, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
