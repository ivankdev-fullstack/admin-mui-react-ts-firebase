import AreaChartBox from "../../components/AreaChartBox/AreaChartBox";
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import LineChartBox from "../../components/LineChartBox/LineChartBox";
import PieChartBox from "../../components/PieChartBox/PieChartBox";
import TopDealsBox from "../../components/TopDealsBox/TopDealsBox";
import {
  areaChartData,
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  pieChartData,
} from "../../data";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDealsBox />
      </div>
      <div className="box box2">
        <LineChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <LineChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox title="" chartData={pieChartData} />
      </div>
      <div className="box box5">
        <LineChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <LineChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <AreaChartBox title="Revenue Analytics" chartData={areaChartData} />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Homepage;
