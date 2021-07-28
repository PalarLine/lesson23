
let randomNumber = Math.floor((Math.random(1, 100))*100+1);
console.log(randomNumber);

let i = 0;

// event onclick button Play

function letsPlay() {

    let tag1 = document.querySelector('dialog');  
    tag1.classList.remove('d-none');
    let tag2 = document.querySelector('div > div  + div');
    tag2.classList.add('hidden');
    // let elem = document.getElementById('wrapper');
    // elem.style.display = 'none';
}

// event onclick button Submit
        
function submit() {   

    // counter of rounds
        if(i < 10) {
        i++;
        let count = 10-i; 
        counter.innerHTML = count; 

                if(count == 0) {
                    let tag = document.querySelector('#start');
                    tag.classList.add('btn-danger');
                    tag.classList.add('disabled');
                    tag.innerText = "GAME OVER!";
                    sss1.classList.add('d-none');
                    sss2.classList.remove('d-none');
                    secretNumber.innerHTML = randomNumber;         
                }
            
                // comparison of numbers                
                let userNumber = +variant.value;
                console.log(userNumber);

                    if(randomNumber < userNumber) {

                         message.innerHTML = 'less';
                            } else if(randomNumber > userNumber) {
                                message.innerHTML = 'greater';
                                    } else {
                                    let tag = document.querySelector('#start');
                                    tag.classList.add('btn-danger');
                                    tag.classList.add('disabled');
                                    tag.innerText = "WINNER!";
                                    message.innerHTML = randomNumber;

                                    }
    }
} 

// event onclick button Repeat

function repeatTheGame() {
    let tag = document.querySelector('dialog');  
    tag.classList.add('d-none'); 
    counter.innerText = 10;
    i = 0;
    variant.value = '';
    start.innerHTML = 'SUBMIT';
    start.classList.remove('disabled');
    start.classList.remove('btn-danger');
    sss1.classList.remove('d-none');
    sss2.classList.add('d-none');
    message.value = '';
    randomNumber = Math.floor((Math.random(1, 99))*100+1);
    console.log(randomNumber);
    
    // let elem = document.getElementById('wrapper');
    // elem.style.display = 'block';
    let tag2 = document.querySelector('div  > div + div');
    tag2.classList.remove('hidden');

   
}
