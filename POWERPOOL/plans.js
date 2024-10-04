// Sample data for government plans
const governmentPlans = {
    "delhi": "Delhi Solar Power Subsidy Program: Get up to 30% off on solar panels.",
    "110001": "Delhi Clean Energy Initiative: Rebates for solar panel installation.",
    "mumbai": "Maharashtra Wind Energy Scheme: Avail discounts on wind turbines.",
    "400001": "Mumbai Solar Energy Scheme: Discounts on home solar systems.",
    "bangalore": "Karnataka Green Power: Solar and wind energy incentives.",
    "560001": "Bangalore Solar Rooftop Scheme: 20% off on rooftop solar installations."
};


// Get elements from the DOM
const form = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');
const pinInput = document.getElementById('pinInput');
const formMessage = document.getElementById('formMessage');
const plansPara = document.getElementById('plansPara');
const resultDiv = document.getElementById('resultDiv');


// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page


    // Get the user's input and normalize it
    const userLocation = locationInput.value.trim().toLowerCase();
    const pin = pinInput.value.trim();
   
    // Hide previous results
    formMessage.classList.add('hidden');
    resultDiv.classList.add('hidden');


    // Error if no input is given
    if (userLocation === '' && pin === '') {
        formMessage.textContent = "Please enter the area or PIN code!";
        formMessage.style.color = 'red';
        formMessage.classList.add('error');
        formMessage.classList.remove('hidden');
        return;
    }


    // Check if the location or pin exists in the governmentPlans object
    if (governmentPlans[userLocation] || governmentPlans[pin]) {
        // If a matching plan is found, display it
        plansPara.textContent = governmentPlans[userLocation] || governmentPlans[pin];
        resultDiv.classList.remove('hidden');
    } else {
        // If no matching plan is found, show a message
        plansPara.textContent = "No government plans available for your location.";
        resultDiv.classList.remove('hidden');
    }
});

