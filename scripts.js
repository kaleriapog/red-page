const buttonRed = document.querySelector('.button');
const inputRed = document.querySelector('.input');

buttonRed.addEventListener('click', (e)=> {
    e.preventDefault();

    emailRed = inputRed.value;

    if (emailRed) {

        document.location.href = `https://github.com/kaleriapog/yellow-page?${emailRed}`;
    }    
})