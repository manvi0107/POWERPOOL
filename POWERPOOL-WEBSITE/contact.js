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
        document.getElementById('name').value = '';
        document.getElementById('email').value = ''; 
        document.getElementById('message').value = '';
        document.getElementById('Location').value = '';
    }
});
