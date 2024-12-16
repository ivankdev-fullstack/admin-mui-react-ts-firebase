import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChartDataType } from "../../interfaces/charts";
import "./AreaChartBox.scss";

interface Props {
  title: string;
  chartData: AreaChartDataType;
}

const AreaChartBox = ({ title, chartData }: Props) => {
  return (
    <div className="areaChart">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Area
              type="monotone"
              dataKey="electronic"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="books"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
