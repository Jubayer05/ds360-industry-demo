import React from "react";
import { FaRocket } from "react-icons/fa";

export const FuturePlan: React.FC = () => {
  const actionPlans = [
    {
      title: "Capability at Scale",
      keyActions: [
        "Launch role-based academies",
        "Microlearning library",
        "Digital badges",
      ],
      successMetrics: [
        "60% role coverage",
        "80% course completion",
        "500 badges issued",
      ],
      color: "blue",
    },
    {
      title: "Data-Driven Decisions",
      keyActions: [
        "Training ROI dashboard",
        "Skills inventory",
        "TNA automation",
      ],
      successMetrics: [
        "Quarterly ROI reports",
        "Skills map for all departments",
      ],
      color: "green",
    },
    {
      title: "OD & Culture",
      keyActions: [
        "Leadership brand refresh",
        "Mentor marketplace",
        "Change partner network",
      ],
      successMetrics: ["+10 engagement", "Mentor pool of 50"],
      color: "purple",
    },
  ];

  const risks = [
    {
      risk: "Bandwidth of SMEs",
      mitigation: "Mitigation: Build trainer pool & incentives",
      color: "red",
    },
    {
      risk: "Change resistance",
      mitigation: "Mitigation: Comms & sponsor roadmap",
      color: "orange",
    },
    {
      risk: "Data silos",
      mitigation: "Mitigation: Central hub & governance",
      color: "yellow",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        card: "border-blue-200 bg-blue-50",
        title: "text-blue-800",
        dot: "bg-blue-500",
      },
      green: {
        card: "border-green-200 bg-green-50",
        title: "text-green-800",
        dot: "bg-green-500",
      },
      purple: {
        card: "border-purple-200 bg-purple-50",
        title: "text-purple-800",
        dot: "bg-purple-500",
      },
      red: {
        card: "border-red-200 bg-red-50",
        title: "text-red-800",
        dot: "bg-red-500",
      },
      orange: {
        card: "border-orange-200 bg-orange-50",
        title: "text-orange-800",
        dot: "bg-orange-500",
      },
      yellow: {
        card: "border-yellow-200 bg-yellow-50",
        title: "text-yellow-800",
        dot: "bg-yellow-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <FaRocket className="text-gray-600 text-xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">
              Future / Action Plan
            </h1>
          </div>
          <p className="text-lg text-gray-600">Multi-year roadmap</p>
        </div>

        {/* 2025-2027 Action Plan Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              2025-2027 Action Plan
            </h2>
            <p className="text-lg text-gray-600">
              Strategic pillars, outcomes, and risks
            </p>
          </div>

          {/* Action Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionPlans.map((plan, index) => {
              const colors = getColorClasses(plan.color);
              return (
                <div
                  key={index}
                  className={`rounded-lg border-2 p-6 ${colors.card} shadow-sm`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${colors.title}`}>
                    {plan.title}
                  </h3>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Key Actions:
                    </h4>
                    <ul className="space-y-1">
                      {plan.keyActions.map((action, actionIndex) => (
                        <li
                          key={actionIndex}
                          className="flex items-start text-gray-600 text-sm"
                        >
                          <span
                            className={`w-2 h-2 ${colors.dot} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Success Metrics:
                    </h4>
                    <ul className="space-y-1">
                      {plan.successMetrics.map((metric, metricIndex) => (
                        <li
                          key={metricIndex}
                          className="flex items-start text-gray-600 text-sm"
                        >
                          <span
                            className={`w-2 h-2 ${colors.dot} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Risks & Mitigations Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Risks & Mitigations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {risks.map((risk, index) => {
              const colors = getColorClasses(risk.color);
              return (
                <div
                  key={index}
                  className={`rounded-lg border-2 p-4 ${colors.card} shadow-sm`}
                >
                  <h3
                    className={`font-bold text-gray-800 mb-2 ${colors.title}`}
                  >
                    {risk.risk}
                  </h3>
                  <p className="text-gray-600 text-sm">{risk.mitigation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
