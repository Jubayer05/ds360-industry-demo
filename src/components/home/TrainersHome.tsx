import React from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaPhone,
  FaUsers,
} from "react-icons/fa";

export const TrainersHome: React.FC = () => {
  const trainers = [
    {
      id: 1,
      name: "Ms. Farzana Rahman",
      role: "Head of Training & OD",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      skills: ["Leadership", "Strategic OD", "Coaching"],
      description:
        "15+ years in L&D and culture transformation. ICF ACC Coach.",
      email: "farzana.rahman@ds360.com",
      phone: "+880 1753-139834",
      link: "LinkedIn",
      linkUrl: "#",
    },
    {
      id: 2,
      name: "Mr. Arif Hossain",
      role: "Senior Trainer — Excel & Power BI",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["Excel", "Power BI", "Data Storytelling"],
      description:
        "Former financial analyst. Delivers data curriculum for business teams.",
      email: "arif.hossain@ds360.com",
      phone: "+880 1753-139835",
      link: "Portfolio",
      linkUrl: "#",
    },
    {
      id: 3,
      name: "Ms. Tanisha Karim",
      role: "Instructional Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Curriculum", "E-learning", "Assessment"],
      description: "Designs blended learning and microlearning at scale.",
      email: "tanisha.karim@ds360.com",
      phone: "+880 1753-139836",
      link: "Behance",
      linkUrl: "#",
    },
  ];
  // ... existing code ...

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <FaUsers className="text-white text-xl" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Trainers & Experts
            </h1>
          </div>
          <p className="text-lg text-slate-600">Meet our facilitation pool</p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded border border-slate-100 p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="mb-4 relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              {/* Name and Role */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-slate-600 text-sm">{trainer.role}</p>
              </div>
              {/* Skills Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {trainer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trainer.id === 1
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200"
                          : trainer.id === 2
                          ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200"
                          : "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Description */}
              <p className="text-slate-700 text-sm mb-6 leading-relaxed">
                {trainer.description}
              </p>

              {/* Contact Information */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="flex items-center text-xs p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <FaEnvelope className="text-white text-xs" />
                  </div>
                  <a
                    href={`mailto:${trainer.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Email
                  </a>
                </div>

                <div className="flex items-center text-xs p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <FaPhone className="text-white text-xs" />
                  </div>
                  <span className="text-slate-700">{trainer.phone}</span>
                </div>

                <div className="flex items-center text-xs p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                  <a
                    href={trainer.linkUrl}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    {trainer.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
