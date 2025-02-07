import React, { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Yanvar", sales: 100 },
  { name: "Fevral", sales: 500 },
  { name: "Mart", sales: 200 },
  { name: "Aprel", sales: 500 },
];

function InteractiveChart() {
  const [chartType, setChartType] = useState("chart");

  return (
    <div className="container">
      <h2 className="h2">Interaktiv Chart</h2>
      <select
      className="select"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
      >
        <option className="option" value="pie">two-Chart</option>
        <option className="option" value="line">there-Chart</option>

      </select>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === "line" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        )}
        {chartType === "pie" && (
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie data={data} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default InteractiveChart;
