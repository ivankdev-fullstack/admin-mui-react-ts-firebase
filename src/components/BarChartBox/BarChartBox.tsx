import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarChartBox.scss";

interface Props {
  title: string;
  chartData: Object[];
  dataKey: string;
  color: string;
}

const BarChartBox = ({ title, chartData, dataKey, color }: Props) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
          >
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar
              type="monotone"
              dataKey={dataKey}
              fill={color}
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
