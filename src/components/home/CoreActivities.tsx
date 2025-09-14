import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaChartBar,
  FaClipboardCheck,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";
import { Card } from "../ui/Card";

export const CoreActivities: React.FC = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-4xl text-blue-600" />,
      title: "Curriculum Design",
      description: "Competency-based pathways for all functions.",
      tags: ["SLA", "SOP", "Templates"],
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
      title: "Training Delivery",
      description: "Classroom, virtual, and blended formats.",
      tags: ["SLA", "SOP", "Templates"],
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-purple-600" />,
      title: "Assessment",
      description: "Pre-post tests, skills check, simulations.",
      tags: ["SLA", "SOP", "Templates"],
    },
    {
      icon: <FaUserTie className="text-4xl text-orange-600" />,
      title: "Coaching & Mentoring",
      description: "Leader-as-coach programs and pools.",
      tags: ["SLA", "SOP", "Templates"],
    },
    {
      icon: <FaCogs className="text-4xl text-red-600" />,
      title: "OD Interventions",
      description: "Culture, engagement, and change projects.",
      tags: ["SLA", "SOP", "Templates"],
    },
    {
      icon: <FaChartBar className="text-4xl text-indigo-600" />,
      title: "Analytics & ROI",
      description: "Kirkpatrick, Phillips ROI, dashboarding.",
      tags: ["SLA", "SOP", "Templates"],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Activities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            End-to-end L&D and OD services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full border border-green-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
