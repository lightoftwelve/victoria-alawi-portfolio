import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="navigationWrapper">
        <Header />
        <div className="pageContent">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
