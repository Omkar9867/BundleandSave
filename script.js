const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalAmount = document.querySelector('.value .amount');

// Function to handle box click event
const handleBoxClick = (event) => {
    const clickedBox = event.currentTarget;
    const radioButton = clickedBox.querySelector('input[type="radio"]');
    if (!radioButton.checked) {
        radioButton.checked = true;
        const selectedAmt = clickedBox.querySelector('.my-align strong').innerText;
        updateTotalAmount(selectedAmt);
    }
    const boxes = document.querySelectorAll('.main');
    boxes.forEach(box => {
        box.classList.remove('active');
    });
    clickedBox.classList.add('active');
};

// Function to update total amount
const updateTotalAmount = (selectedAmt) => {
    totalAmount.innerText = selectedAmt;
};

// Event listener for box click
document.querySelectorAll('.main').forEach(box => {
    box.addEventListener('click', handleBoxClick);
});
