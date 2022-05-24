import "./App.css";
import NavigationSide from "./components/SideBar";
import NavigationTop from "./components/NavBar";
import DashboardBar from "./components/Dashboard";
import List from "./components/ListPersonnel";
import "./style/myCSS.css";
import style from "./style/content.module.css"
// import { Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationTop />
        <div className="d-flex">

        <NavigationSide />
        <div className={`mh-100 overflow-y-scroll ${style.content}`}>

        <DashboardBar />
        <List />
        </div>
        </div>
      </div>
      {/* <div className="list"></div> */}
    </div>
  );
}

export default App;
