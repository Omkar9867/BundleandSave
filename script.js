const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', (event) => {
        const boxes = document.querySelectorAll('.main');
        boxes.forEach(box => {
            box.classList.remove('active');
        });

        const selectedBox = event.target.closest('.main');
        selectedBox.classList.add('active');
    });

}
);