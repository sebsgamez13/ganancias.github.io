const formBtn = document.querySelector('form button')
const imgContainer = document.querySelector('.pre-simulation')
const rightContent = document.querySelector('.post-simulation')
const form = document.querySelector('form')


const fullnameContent = document.getElementById('fullname')
const emailContent = document.getElementById('email')
const timeContent = document.getElementById('time')
const averageContent = document.getElementById('average')
const totalAmountContent = document.getElementById('total_amount')
const gananciaContent = document.getElementById('ganancia')



const yearRate = 0.008; 
const secondYearRate = 0.013; 
const thirdYearRate = 0.017; 

form.onsubmit = (e) => {
    e.preventDefault()


    const fullname = document.getElementById('fullname_input').value;
    fullnameContent.textContent = fullname


    const email = document.getElementById('email_input').value;
    emailContent.textContent = email;


    const time = document.getElementById('time_input').value;
    timeContent.textContent = time;

    const amount = document.getElementById('amount_input').value;


    switch (time) {
        case '12':
            averageContent.textContent = '0.8%';
            totalAmountContent.textContent = parseInt(amount) + ((amount * yearRate) * 12)
            gananciaContent.textContent = (amount * yearRate) * 12
            break;
        case '24':
            averageContent.textContent = '1.3%';
            totalAmountContent.textContent = parseInt(amount) + ((amount * secondYearRate) * 24)
            gananciaContent.textContent = (amount *secondYearRate) * 24

            break;
        case '36':
            averageContent.textContent = '1.7%';
            totalAmountContent.textContent = parseInt(amount) + ((amount * thirdYearRate) * 36)
            gananciaContent.textContent = (amount *thirdYearRate) * 36
            
            break;
        default:
            break;
    }
}

formBtn.onclick = () => {

    imgContainer.classList.add('disabled')
    rightContent.classList.remove('disabled') 
}

