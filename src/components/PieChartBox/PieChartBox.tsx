import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PieChartDataType } from "../../interfaces/charts";
import "./PieChartBox.scss";

interface Props {
  title: string;
  chartData: PieChartDataType;
}

const PieChartBox = ({ title, chartData }: Props) => {
  return (
    <div className="pieChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
            >
              {chartData.map((i) => (
                <Cell key={i.name} fill={i.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {chartData.map((i) => (
          <div className="option" key={i.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: i.color }}></div>
              <span>{i.name}</span>
            </div>
            <span>{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
