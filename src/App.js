import "./App.css";
import { useEffect, useState } from "react";
import { RadixDappToolkit, DataRequestBuilder, createLogger } from "@radixdlt/radix-dapp-toolkit";

function App() {  
  const [connectedAccount, setConnectedAccount] = useState("");

  useEffect(() => {
    const radixDappToolkit = RadixDappToolkit({
      dAppDefinitionAddress:
        "account_tdx_2_12xf3455ks96n777zvsw8a5hvuk2cqzm58ktwrfuzrf6yqrl6ydv2h6", // change this to your own DApp address
      networkId: 2, // Stokenet
    //  logger: createLogger(1),
    });

    radixDappToolkit.buttonApi.setTheme("white");

    radixDappToolkit.walletApi.setRequestData(DataRequestBuilder.accounts().exactly(1));

    radixDappToolkit.walletApi.walletData$.subscribe((walletData) => {
     //  console.log("walletData in Layout: ", walletData);
      if (walletData.accounts.length === 0) {
        setConnectedAccount("unconnected");
      } else {
        setConnectedAccount(walletData.accounts[0].address);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a simple create-react-app with Radix Dapp Toolkit using the
          Radix Connect Button.
        </p>
        <radix-connect-button />
        <p>Your account is {connectedAccount}</p>
      </header>     
    </div>
  );
}

export default App;
