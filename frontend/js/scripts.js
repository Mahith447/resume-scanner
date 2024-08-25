// Handle resume upload and analysis
function handleUploadResume() {
    const resumeText = document.getElementById('resumeText').value;
    const jobDescriptionText = document.getElementById('jobDescriptionText').value;
  
    fetch('/api/upload-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeText, jobDescriptionText }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Upload and analysis result:', data);
    });
  }
  
  // Handle resume editing and download
  function handleEditResume() {
    const resumeText = document.getElementById('resumeText').value;
    const suggestions = JSON.parse(document.getElementById('suggestions').value);
  
    fetch('/api/edit-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeText, suggestions }),
    })
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'edited_resume.docx';
      link.click();
    });
  }
  
  document.getElementById('uploadButton').addEventListener('click', handleUploadResume);
  document.getElementById('editButton').addEventListener('click', handleEditResume);
  