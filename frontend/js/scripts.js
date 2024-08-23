document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message or redirect)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
    });
});
