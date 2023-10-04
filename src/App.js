import logo from "./logo.svg";
import "./App.css";
import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";

function App() {
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      "account_tdx_2_12xf3455ks96n777zvsw8a5hvuk2cqzm58ktwrfuzrf6yqrl6ydv2h6", // change this to your own DApp address 
    networkId: 2, // Stokenet
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a simple create-react-app with Radix Dapp Toolkit using the
          Radix Connect Button.
        </p>
        <radix-connect-button />
      </header>
    </div>
  );
}

export default App;
