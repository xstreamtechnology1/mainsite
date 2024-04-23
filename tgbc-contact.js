document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Display the loading spinner when the form is being submitted
    document.getElementById('submitButton').disabled = true; // Disable the button to prevent multiple submissions
    document.querySelector('.spinner').style.display = 'inline-block';
    
    // Collect form data
    const formData = new FormData(this);

    // Send form data asynchronously
    fetch('https://formsubmit.co/ajax/info@throneofgracebc.org',
    //fetch('https://formspree.io/f/mpzvyrnz/ajax/info@throneofgracebc.org',
    {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Redirect after form submission is successful
            window.location.href = 'thanks.html'; // Replace with your desired URL
        } else {
            // Handle error if form submission fails
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


