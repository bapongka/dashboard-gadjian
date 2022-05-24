import "./App.css";
import NavigationSide from "./components/SideBar";
import NavigationTop from "./components/NavBar";
import DashboardBar from "./components/Dashboard";
import List from "./components/ListPersonnel";
import "./style/myCSS.css";
import style from "./style/content.module.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="myBG">
      <Container>
        <NavigationTop />
        <div className="d-flex">
          <NavigationSide />
          <div className={`overflow-y-scroll ${style.content}`}>
            <DashboardBar />
            <List />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
