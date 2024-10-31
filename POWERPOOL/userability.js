app.get("/api/scheme-eligibility/:location", async (req, res) => {
    const { location } = req.params;

    try {
        // Fetch eligible schemes from your backend (or a database)
        const eligibleSchemes = getSchemesByLocation(location); // Placeholder function
        res.json({ eligibleSchemes });
    } catch (error) {
        res.status(500).send("Error fetching schemes: " + error.message);
    }
});

// Placeholder for retrieving schemes by location
function getSchemesByLocation(location) {
    return [
        { name: "Solar Subsidy", description: "Get 50% off on solar panel installations.", location },
        { name: "EV Incentive", description: "Receive grants for electric vehicle purchases.", location }
    ];
}
