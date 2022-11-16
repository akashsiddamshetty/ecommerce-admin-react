import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/ListTable";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg"
                alt="user-profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 12345678</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton st. 234 Garden Yd . NewYork
                  </span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart height={209} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Trasscation</h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
