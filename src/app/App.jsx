// App
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import "../styles/index.css";

function App() {
  return (
    <Router>
      <Header />
      <MainLayout />
    </Router>
  );
}

export default App;