// Example for creating an account
async function createAccount() {
    try {
        const response = await fetch("http://localhost:3000/api/create-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log("New Aptos Account:", data);
    } catch (error) {
        console.error("Error creating account:", error);
    }
}
