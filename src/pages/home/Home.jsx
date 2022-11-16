import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import "./home.scss";
import ListTable from "../../components/table/ListTable";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart height={320} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transctions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
