function filterSchemes() {
    const locality = document.getElementById("locality").value;
    const schemes = document.querySelectorAll(".scheme-card");

    schemes.forEach(scheme => {
        const schemeLocality = scheme.getAttribute("data-locality");

        if (locality === "all" || schemeLocality === locality) {
            scheme.style.display = "block";
        } else {
            scheme.style.display = "none";
        }
    });
}
