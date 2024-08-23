document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        // Redirect to results page or display a success message
        window.location.href = 'results.html';
    })
    .catch(error => {
        console.error('Error:', error);
        // Display an error message
    });
});
// Add this code to handle displaying results
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/results')
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('resultsContainer');
            resultsContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
