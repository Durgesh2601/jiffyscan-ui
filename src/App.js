import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Topbar />
      <Tabs />
    </div>
  );
};

export default App;