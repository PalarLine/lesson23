
var machin = Math.floor((Math.random(1, 100))*100);
console.log(machin);

var i = 0;

function startTheGame() {

    
    // console.log("12");

    let tag = document.querySelector('dialog');  
    tag.classList.remove('d-none');   


    
}

function submit() {
    
    
    if(i < 10) {
        i++;
        let a = 10-i; 
        counter.innerHTML = a; 
          
        if(a == 0) {
            let tag = document.querySelector('#start');
            tag.classList.add('btn-danger');
            tag.classList.add('disabled');
            tag.innerText = "Game Over!";
            message.innerHTML = machin;  
        
        }
            

    let number = +variant.value;
    console.log(number);

        if(machin < number) {
            message.innerHTML = 'less';
        } else if(machin > number) {
            message.innerHTML = 'greater';
        } else {
            // message.innerHTML = 'You are a winner! Congratulations!';
            let tag = document.querySelector('#start');
            tag.classList.add('disabled');
            tag.innerText = "WINNER!";
            message.innerHTML = machin;
        }
    } else {
        
        message.innerHTML = machin;
           

    }

        


}



 