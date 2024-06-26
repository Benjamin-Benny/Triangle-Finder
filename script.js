// Get form and result elements
const triangleForm = document.getElementById('triangleForm');
const resultDiv = document.getElementById('result');

// Function to check if three numbers form a triangle
const checkTriangle = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        return "YES";
    } else {
        return "NO";
    }
};

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get values from input fields
    const side1 = parseInt(document.getElementById('side1').value);
    const side2 = parseInt(document.getElementById('side2').value);
    const side3 = parseInt(document.getElementById('side3').value);
    
    // Check if they form a triangle
    const result = checkTriangle(side1, side2, side3);
    
    // Display result
    resultDiv.textContent = `Do sides (${side1}, ${side2}, ${side3}) form a triangle? ${result}`;
};

// Add submit event listener to form
triangleForm.addEventListener('submit', handleSubmit);
