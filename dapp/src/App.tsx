import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 引入页面组件
// import Home from './components/Home';
import About from './components/About';
import Contract from './pages/Contract';
import HomePage from './pages/HomePage';
import ServerSideVerification from './pages/ServerSideVerification';
import Transaction from './pages/Transaction';
import PloyMarketHome from './pages/PolyMarket/home';
import Politics from './pages/PolyMarket/Politics';
import Crypto from './pages/PolyMarket/Crypto';
import Sports from './pages/PolyMarket/Sports';

// 从你的示例代码中引入必要的 Web3 和钱包服务
import { Web3AuthInnerContext, Web3AuthProvider } from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import { Playground } from "./services/playground";
import web3AuthContextConfig from './services/web3authContext';

const App: React.FC = () => {
  return (
    <Web3AuthProvider config={web3AuthContextConfig}>
      <WalletServicesProvider context={Web3AuthInnerContext}>
        <Playground>
          <Router>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contract">Contract</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
                <li><Link to="/server-side-verification">Server Side Verification</Link></li>
                <li><Link to="/polyMarket-home">PolyMarket Home</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/server-side-verification" element={<ServerSideVerification />} />
              <Route path="/polyMarket-home" element={<PloyMarketHome />}>
                <Route index element={<Politics />} />
                <Route path="politics" element={<Politics />} />
                <Route path="crypto" element={<Crypto />} />
                <Route path="sports" element={<Sports />} />
              </Route>
            </Routes>
          </Router>
        </Playground>
      </WalletServicesProvider>
    </Web3AuthProvider>
  );
};

export default App;
