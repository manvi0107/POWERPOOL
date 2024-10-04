// Questions for "QUESTION OF THE DAY"
const question = [
    "How can you conserve water in your daily life?",
    "What local sustainable initiatives can you participate in?",
    "How does recycling benefit the environment?",
    "Why is renewable energy important for the future?",
    "What sustainable practices can be applied at your workplace?"
];

function newQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("question-text").innerText = questions[randomIndex];
}

// Animation logic
function handleScroll() {
    const sections = document.querySelectorAll('.animated-section');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', handleScroll);

// Mock data for government plans based on location
const governmentPlans = {
    "delhi": "Delhi Solar Policy: Offers subsidies for rooftop solar installations, net metering, and green energy certificates.",
    "110001": "Delhi Solar Initiative: 30% subsidy on residential rooftop solar systems, benefits for schools and institutions.",
    "mumbai": "Maharashtra Solar Energy Policy: Focus on rooftop solar installation, promoting energy-efficient housing, and solar power for railways.",
    "400001": "Mumbai Green Energy Project: Encourages solar energy adoption through tax rebates and subsidy programs.",
    "bengaluru": "Karnataka Renewable Energy Development Ltd (KREDL): Solar rooftop programs, wind energy projects, and electric vehicle (EV) infrastructure incentives.",
    "560001": "Bengaluru Solar Mission: Subsidies for solar water heaters and rooftop solar installations in residential buildings.",
    "chennai": "Tamil Nadu Solar Energy Policy: Encourages solar power installations with subsidies, and solar pumps for agricultural purposes.",
    "600001": "Chennai Green Energy Initiative: Focus on solar energy for residential and industrial use, tax rebates for green energy adoption.",
    "kolkata": "West Bengal Renewable Energy Policy: Incentives for solar rooftop projects, small wind turbines, and bio-energy initiatives.",
    "700001": "Kolkata Solar Program: Subsidies for solar rooftop installations in households and commercial buildings.",
    "hyderabad": "Telangana Solar Power Policy: Net metering, rooftop solar incentives, and subsidies for solar power generation in both rural and urban areas.",
    "500001": "Hyderabad Renewable Energy Scheme: Special benefits for solar power installations in urban households and government buildings.",
    "jaipur": "Rajasthan Solar Energy Policy: Promotes large-scale solar parks, small rooftop systems, and energy storage solutions.",
    "302001": "Jaipur Solar Park Initiative: Solar water pumps, rooftop solar incentives, and priority sector lending for green energy projects.",
    "lucknow": "Uttar Pradesh Solar Power Policy: Subsidies for solar pumps for agriculture, rooftop solar for residential areas, and solar parks in the state.",
    "226001": "Lucknow Solar Program: Focus on solar street lighting, household rooftop systems, and agriculture solar pump benefits."
};




// Get the form and result elements
const form = document.getElementById('locationForm');
const resultDiv = document.getElementById('result');
const plansPara = document.getElementById('plans');


// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page


    // Get the user's input and normalize it
    let userLocation = document.getElementById('locationInput').value.trim().toLowerCase();
    let formMessage = document.getElementById('formMessage1');


    // error if no input is given
    if (userLocation=== '') {
        formMessage.textContent = "Please enter the location!";
        formMessage.style.color = 'red';
        formMessage.classList.remove('hidden');
    } else {
        formMessage.textContent = "These are available plans!";
        formMessage.style.color = 'green';
        formMessage.classList.remove('hidden');
    }    


    // Check if the location exists in the governmentPlans object
    if (governmentPlans[userLocation]) {
        // If a matching plan is found, display it
        plansPara.textContent = governmentPlans[userLocation];
        resultDiv.classList.remove('hidden');
   
    } else if (userLocation=== '') {
        formMessage.textContent = "Please enter the location!";
        formMessage.style.color = 'red';
        formMessage.classList.remove('hidden'); }
   
    else {
        // If no matching plan is found, show a message
        plansPara.textContent = "No government plans available for your location.";
        resultDiv.classList.remove('hidden');
    }
});










document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let Location = document.getElementById('Location').value;
    let formMessage = document.getElementById('formMessage');


    if (name === '' || email === '' || Location === '' || message === '') {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = 'red';
        formMessage.classList.remove('hidden');
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = 'green';
        formMessage.classList.remove('hidden');
    }
});
