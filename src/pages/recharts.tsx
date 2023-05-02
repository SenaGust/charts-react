import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "Page A",
    "Previous Period": 4000,
    "Current Period": 2400,
    day: "22/12",
  },
  {
    name: "Page B",
    "Previous Period": 3000,
    "Current Period": 1398,
    day: "23/12",
  },
  {
    name: "Page C",
    "Previous Period": 2000,
    "Current Period": 9800,
    day: "24/12",
  },
  {
    name: "Page D",
    "Previous Period": 2780,
    "Current Period": 3908,
    day: "25/12",
  },
  {
    name: "Page E",
    "Previous Period": 1890,
    "Current Period": 4800,
    day: "25/12",
  },
  {
    name: "Page F",
    "Previous Period": 2390,
    "Current Period": 3800,
    day: "25/12",
  },
  {
    name: "Page G",
    "Previous Period": 3490,
    "Current Period": 4300,
    day: "25/12",
  },
];

export default function Recharts() {
  const color = "rgba(255, 26, 255, 1)";
  return (
    <div
      style={{
        width: "90vw",
        height: "215px",
        backgroundColor: "white",
        paddingTop: 150,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            tickMargin={15}
            tickSize={0}
            stroke="rgba(157, 157, 156, 1)"
          />
          <YAxis
            axisLine={false}
            tickMargin={10}
            tickSize={0}
            stroke="rgba(157, 157, 156, 1)"
            tickFormatter={(tick) => {
              if (tick >= 1000 && tick < 1000000) return tick / 1000 + "k";
              else if (tick >= 1000000) return tick / 1000000 + "m";
              else return tick;
            }}
          >
            <Label
              value="Payments per day"
              position="insideLeft"
              angle={-90}
              style={{
                textAnchor: "middle",
                color: "rgb(157, 157, 156)",
              }}
            />
          </YAxis>
          <Tooltip />
          <Legend
            align="left"
            iconType="plainline"
            wrapperStyle={{
              position: "relative",
              marginTop: "20px",
            }}
          />
          <defs>
            <linearGradient id={`color`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4}></stop>
              <stop offset="75%" stopColor={color} stopOpacity={0.05}></stop>
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="Current Period"
            stroke="rgba(255, 26, 255, 1)"
            fill={`url(#color)`}
            dot={false}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Previous Period"
            stroke="rgba(255, 153, 255, 1)"
            strokeDasharray="5"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
