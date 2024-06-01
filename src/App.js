import Navbar from "./components/Navbar";
import TabContent from "./components/TabContent";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Topbar />
      <TabContent />
    </div>
  );
};

export default App;
