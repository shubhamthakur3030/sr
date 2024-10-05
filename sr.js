// Add event listener to button
document.addEventListener('DOMContentLoaded', () => {
    const makeItRightBtn = document.querySelector('.make-it-right-btn');
    const personalMessage = document.querySelector('.personal-message');

    makeItRightBtn.addEventListener('click', () => {
        console.log('Let\'s make it right button clicked!');
        personalMessage.style.display = 'block'; /* show the message */
        makeItRightBtn.style.display = 'none'; /* hide the button */
    });
});