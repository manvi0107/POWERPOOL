// Function to toggle visibility of forms
function toggleForm(formId) {
    const form = document.getElementById(formId);
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
}
