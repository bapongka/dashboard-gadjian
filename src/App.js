import "./App.css";
import NavigationSide from "./components/SideBar";
import NavigationTop from "./components/NavBar";
import DashboardBar from "./components/Dashboard";
import List from "./components/ListPersonnel";
import "./style/myCSS.css";
// import { Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationTop />
        <NavigationSide />
        <DashboardBar />
        <List />
      </div>
      {/* <div className="list"></div> */}
    </div>
  );
}

export default App;
