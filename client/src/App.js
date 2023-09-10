import { Routes, Route } from "react-router-dom";
import LobbyCopy from "./screens/LobbyCopy";
import RoomPage from "./screens/Room";
import HomePage from "./Components/HomePage";
import MintNFT from "./Components/MintNFT";
import {ThirdwebSDKProvider} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

function App() {

  const ActiveChainID=80001;

  return (
    <div className="App">
      <ThirdwebSDKProvider activeChain={ActiveChainID} signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()} clientId="5fb26c268ed64fb73d9fb6010411dca9" >
      <Routes>
        <Route path="/" Component={HomePage } />
        <Route path="/mintnft" Component={MintNFT} />
        <Route path="/Lobby" Component={LobbyCopy} />
        <Route path="/room/:roomId" Component={RoomPage} />
      </Routes>
      </ThirdwebSDKProvider>
    </div>
  );
}

export default App;