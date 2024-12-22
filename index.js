function submit(e) {
    const formElement = document.querySelector('form');
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(formElement); // Create form data object from the form
  
    fetch("https://script.google.com/macros/s/AKfycbxkXcLANRBJvNtOoGD51P4W4tRKu01uiYYHOhMPjL5x9-1phxJAsl2-mAXzgDk26YN1/exec", 
      {
        method: 'POST',
        body: formData,
      })
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', submit); // Add event listener for form submission
  