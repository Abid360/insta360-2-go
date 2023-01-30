import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 1000,
      sell: 241,
      revenue: 1040,
    },
    {
      month: "Apr",
      investment: 2000,
      sell: 423,
      revenue: 2019,
    },
    {
      month: "May",
      investment: 5000,
      sell: 726,
      revenue: 4700,
    },
    {
      month: "Jun",
      investment: 5000,
      sell: 529,
      revenue: 4040,
    },
    {
      month: "Jul",
      investment: 6000,
      sell: 601,
      revenue: 5040,
    },
    {
      month: "Aug",
      investment: 7000,
      sell: 670,
      revenue: 6105,
    },
  ];

  return (
    <div>
      <h2 className="text-7xl text-sky-400 font-bold mb-10">
        {" "}
        Welcome to Dashboard
      </h2>
      <div className="grid grid-cols-2 items-center">
        <div className="text-center mx-12 px-12">
          <p className="text-3xl font-medium">Per Month Sell</p>
          <LineChart width={400} height={400} data={data}>
            <Line dataKey={"sell"}></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend />
          </LineChart>
        </div>
        <div className="text-center mx-12 px-12">
          <p className="mb-10 text-3xl font-medium">Per Month Revenue</p>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="month"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="revenue"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
