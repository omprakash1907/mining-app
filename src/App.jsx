import { Routes, Route } from "react-router-dom";
import Layout from "./rootlayout/Layout";
import StartMining from "./pages/StartMining";
import HomePage from "./pages/HomePage";
import './App.css'
import BitcoinMiningContract from "./pages/BitcoinMiningContract";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-mining" element={<StartMining />} />
        <Route path="/mining-contract" element={<BitcoinMiningContract />} />
      </Route>
    </Routes>
  );
}

export default App;
