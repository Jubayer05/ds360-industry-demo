"use client";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AnalyticsChart = () => {
  // Demo data for different charts
  const trainingData = [
    { month: "Jan", completed: 45, inProgress: 12, planned: 8 },
    { month: "Feb", completed: 52, inProgress: 15, planned: 6 },
    { month: "Mar", completed: 38, inProgress: 18, planned: 10 },
    { month: "Apr", completed: 61, inProgress: 22, planned: 5 },
    { month: "May", completed: 55, inProgress: 14, planned: 7 },
    { month: "Jun", completed: 67, inProgress: 20, planned: 4 },
  ];

  const departmentData = [
    { name: "Leadership", value: 35, color: "#3B82F6" },
    { name: "Technical", value: 28, color: "#10B981" },
    { name: "Compliance", value: 20, color: "#F59E0B" },
    { name: "Soft Skills", value: 17, color: "#EF4444" },
  ];

  const performanceData = [
    { quarter: "Q1", satisfaction: 85, completion: 78, engagement: 82 },
    { quarter: "Q2", satisfaction: 88, completion: 82, engagement: 85 },
    { quarter: "Q3", satisfaction: 92, completion: 88, engagement: 90 },
    { quarter: "Q4", satisfaction: 95, completion: 92, engagement: 94 },
  ];

  const enrollmentData = [
    { week: "Week 1", enrollments: 12 },
    { week: "Week 2", enrollments: 19 },
    { week: "Week 3", enrollments: 15 },
    { week: "Week 4", enrollments: 25 },
    { week: "Week 5", enrollments: 22 },
    { week: "Week 6", enrollments: 30 },
    { week: "Week 7", enrollments: 28 },
    { week: "Week 8", enrollments: 35 },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Training Analytics Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive insights into training performance and engagement
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Training Progress Bar Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Monthly Training Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="completed"
                  fill="#10B981"
                  name="Completed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="inProgress"
                  fill="#F59E0B"
                  name="In Progress"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="planned"
                  fill="#3B82F6"
                  name="Planned"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Department Distribution Pie Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Training by Department
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Second Row Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Trends Line Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quarterly Performance Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="quarter" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                  name="Satisfaction %"
                />
                <Line
                  type="monotone"
                  dataKey="completion"
                  stroke="#06B6D4"
                  strokeWidth={3}
                  dot={{ fill: "#06B6D4", strokeWidth: 2, r: 6 }}
                  name="Completion %"
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#F97316"
                  strokeWidth={3}
                  dot={{ fill: "#F97316", strokeWidth: 2, r: 6 }}
                  name="Engagement %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment Trends Area Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Weekly Enrollment Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient
                    id="colorEnrollments"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="enrollments"
                  stroke="#10B981"
                  strokeWidth={3}
                  fill="url(#colorEnrollments)"
                  name="Enrollments"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsChart;
