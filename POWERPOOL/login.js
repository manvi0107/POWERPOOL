document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately


    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (name === '' || password === '') {
        loginMessage.textContent = "All fields are required!";
        loginMessage.style.color = 'red';
        loginMessage.classList.remove('hidden');
    } else {
        loginMessage.textContent = "Logged In successfully!";
        loginMessage.style.color = 'green';
        loginMessage.classList.remove('hidden');
        document.getElementById('username').value = ''; 
        document.getElementById('password').value = '';
    }
});