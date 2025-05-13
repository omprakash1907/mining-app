import { Routes, Route } from "react-router-dom";
import Layout from "./rootlayout/Layout";
import StartMining from "./pages/StartMining";
import HomePage from "./pages/HomePage";
import './App.css'
import BitcoinMiningContract from "./pages/BitcoinMiningContract";
import BitcoinWallet from "./pages/BitcoinWallet";
import SupportHelp from "./pages/SupportHelp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-mining" element={<StartMining />} />
        <Route path="/mining-contract" element={<BitcoinMiningContract />} />
        <Route path="/bitcoin-wallet" element={<BitcoinWallet />} />
        <Route path="/support" element={<SupportHelp />} />
      </Route>
    </Routes>
  );
}

export default App;
