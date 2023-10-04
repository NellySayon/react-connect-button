# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# How to test the Radix Connect Button

## Install dependencies
Open a terminal and enter
npm install
This will install the Radix DApp Toolkit as defined in package.json

## Create your dApp definition

### Prepare your wallet
Go to "Settings > App Settings > Gateways > Add New Gateway" and then add the address  https://babylon-stokenet-gateway.radixdlt.com/
Create a new test account and persona.

Switch "Developer Mode" on.

Go to "Acccount Setting > Dev Preferences" and press "Get XRD Test Tokens"

### Register your dApp
Go to https://stokenet-console.radixdlt.com/dapp-metadata

Connect your wallet

Tick "This Account is a dApp Definition". Fill in name and description. Press "Send Update Transaction to the Radix Wallet"

Confirm the transaction manifest in your wallet

### Configure the account in your rdt
Go to App.js and change the account to your own account that was used to register the dapp.
