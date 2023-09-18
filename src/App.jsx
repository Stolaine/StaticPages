import "./App.css";
import PageFooter from "./components/pageFooter/PageFooter";
import PageHeader from "./components/pageHeader/PageHeader";
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
