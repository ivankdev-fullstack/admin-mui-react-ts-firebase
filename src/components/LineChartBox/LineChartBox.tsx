import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./LineChartBox.scss";

interface Props {
  title: string;
  number: number | string;
  icon: string;
  chartData: object[];
  dataKey: string;
  color: string;
  percentage: number;
}

const LineChartBox = ({
  title,
  number,
  icon,
  chartData,
  dataKey,
  color,
  percentage,
}: Props) => {
  return (
    <div className="lineChartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="user" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
            >
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 40, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default LineChartBox;
