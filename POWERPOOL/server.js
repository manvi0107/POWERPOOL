// Import necessary modules
const express = require("express");
const { AptosClient, AptosAccount, FaucetClient } = require("@aptos-labs/aptos");
require("dotenv").config();

const app = express();
app.use(express.json());

// Initialize Aptos Client
const client = new AptosClient(process.env.APTOS_NODE_URL);
const faucetClient = new FaucetClient(process.env.APTOS_NODE_URL, process.env.APTOS_FAUCET_URL);

// Route to create an Aptos account
app.post("/api/create-account", async (req, res) => {
    try {
        const account = new AptosAccount();
        await faucetClient.fundAccount(account.address(), 1000000);  // Funding test tokens
        res.json({ address: account.address().hex(), privateKey: account.toPrivateKeyObject() });
    } catch (error) {
        res.status(500).send("Error creating account: " + error.message);
    }
});

