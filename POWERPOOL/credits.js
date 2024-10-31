app.post("/api/reward", async (req, res) => {
    const { userPrivateKey, quizResult } = req.body;
    const rewardAmount = quizResult.correctAnswers * 10;  // 10 credits per correct answer

    try {
        const user = AptosAccount.fromPrivateKeyHex(userPrivateKey);
        const payload = {
            type: "script_function_payload",
            function: "0x1::coin::transfer",
            type_arguments: ["0x1::aptos_coin::AptosCoin"],
            arguments: [user.address().hex(), rewardAmount.toString()],
        };

        const transaction = await client.generateTransaction(user.address(), payload);
        const signedTx = await client.signTransaction(user, transaction);
        const transactionResponse = await client.submitTransaction(signedTx);
        await client.waitForTransaction(transactionResponse.hash);

        res.json({ transactionHash: transactionResponse.hash, creditsAwarded: rewardAmount });
    } catch (error) {
        res.status(500).send("Error rewarding credits: " + error.message);
    }
});
