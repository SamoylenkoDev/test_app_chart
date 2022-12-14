import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Rectangle
} from "recharts";

const data = [
  {
    name: "Jan",
    CP: 4000,
    EFTs: 2400,
    yv: 6500,
    IW: 2400
  },
  {
    name: "Feb",
    CP: 3000,
    EFTs: 1398,
    IW: 6500,
    amt: 2210
  },
  {
    name: "Mar",
    CP: 2000,
    EFTs: 9800,
    IW: 6500,
    amt: 2290
  },
  {
    name: "Apr",
    CP: 2780,
    EFTs: 3908,
    IW: 6500,
    amt: 2000
  },
  {
    name: "May",
    CP: 1890,
    EFTs: 4800,
    IW: 6500,
    amt: 2181
  },
  {
    name: "Jun",
    CP: 2390,
    EFTs: 3800,
    IW: 6500,
    amt: 2500
  },
  {
    name: "Jul",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 2100
  },
  {
    name: "Aug",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 2100
  },
  {
    name: "Sep",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 2100
  },
  {
    name: "Oct",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 2100
  },
  {
    name: "Nov",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 2100
  },
  {
    name: "Dec",
    CP: 3490,
    EFTs: 4300,
    IW: 6500,
    amt: 6500
  },
];

export default function Chart() {
  return (
    <BarChart
      width={1150}
      height={350}
      data={data}
      barSize={35}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <Bar dataKey="EFTs" stackId="a" fill="#4cfa6f" shape={<Rectangle radius={[3, 3, 0, 0]} />}/>
      <Bar dataKey="CP" stackId="a" fill="#9cf8ae" shape={<Rectangle radius={[3, 3, 0, 0]} height={'40px'} />}/>
      <Bar dataKey="IW"  stackId="a" fill="#c7fad1" shape={<Rectangle radius={[10, 10, 0, 0]} />}/>
    </BarChart>
  );
}
