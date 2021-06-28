// Component
import Content from "./component/Content/Content";
import Header from "./component/Navbar/Header";
import Sidebar from "./component/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default App;
