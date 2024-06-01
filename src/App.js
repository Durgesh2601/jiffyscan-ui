import { DataProvider } from "./context/dataContext";
import TabContent from "./components/TabContent";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div className="app">
      <DataProvider>
        <Navbar />
        <Topbar />
        <TabContent />
      </DataProvider>
    </div>
  );
};

export default App;
