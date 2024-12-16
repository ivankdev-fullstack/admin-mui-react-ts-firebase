import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./SingleEntityInfo.scss";

interface Props {
  id: number;
  title: string;
  img?: string;
  info: Object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: Object[];
  };
  activities?: { time: string; text: string }[];
}

const SingleEntityInfo = ({ title, img, info, chart, activities }: Props) => {
  return (
    <div className="container">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="" />}
            <h1>{title}</h1>
          </div>
          <div className="details">
            {Object.entries(info).map((item, idx) => (
              <div className="item" key={idx}>
                <span className="itemTitle">{item[0]}:</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey, idx) => (
                  <Line
                    key={idx}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {activities && (
          <ul>
            {activities.map((activity, idx) => (
              <li key={idx}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SingleEntityInfo;
