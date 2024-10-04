document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately


    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let formMessage = document.getElementById('formMessage');


    if (name === '' || email === '' || surname === '') {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = 'red';
        formMessage.classList.remove('hidden');
    } else {
        formMessage.textContent = "Signed Up successfully!";
        formMessage.style.color = 'green';
        formMessage.classList.remove('hidden');
        document.getElementById('name').value = ''; 
        document.getElementById('email').value = '';
        document.getElementById('surname').value = '';
    }
});