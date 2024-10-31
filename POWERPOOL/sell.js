// Route to list an item for sale or donation
app.post("/api/list-item", async (req, res) => {
    const { ownerPrivateKey, itemDetails, forSale } = req.body;

    try {
        const owner = AptosAccount.fromPrivateKeyHex(ownerPrivateKey);
        const payload = {
            type: "script_function_payload",
            function: "0x1::marketplace::list_item",
            type_arguments: ["0x1::item::Asset"],
            arguments: [itemDetails, forSale],
        };

        const transaction = await client.generateTransaction(owner.address(), payload);
        const signedTx = await client.signTransaction(owner, transaction);
        const transactionResponse = await client.submitTransaction(signedTx);
        await client.waitForTransaction(transactionResponse.hash);

        res.json({ transactionHash: transactionResponse.hash, status: "Listed" });
    } catch (error) {
        res.status(500).send("Error listing item: " + error.message);
    }
});
