import "./App.css";
import PageFooter from "./components/footer/PageFooter";
import PageHeader from "./components/header/PageHeader";
import ReactInfo from "./components/reactInfo/ReactInfo";

function App() {
  return (
    <div>
      <PageHeader />
      <ReactInfo />
      <PageFooter />
    </div>
  );
}

export default App;
