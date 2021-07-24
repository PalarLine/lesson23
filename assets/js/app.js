
var machin = Math.floor((Math.random(1, 100))*100+1);
console.log(machin);
var i = 0;

function letsPlay() {
 
    console.log("12");

    let tag = document.querySelector('dialog');  
    tag.classList.remove('d-none');
    
    
          
    
}


// function startTheGame() {


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
                    sss1.classList.add('d-none');
                    sss2.classList.remove('d-none');
                    secretNumber.innerHTML = machin;         
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
        
        // } else {
        
        // message.innerHTML = machin;
           

        // }

        

        }
    }



} 

function repeatTheGame() {
    let tag = document.querySelector('dialog');  
    tag.classList.add('d-none'); 
    counter.innerText = 10;
    i = 0;
    variant.value = '';
    start.innerHTML = 'SUBMIT!';
    start.classList.remove('disabled');
    start.classList.remove('btn-danger');
    sss1.classList.remove('d-none');
    sss2.classList.add('d-none');
    message.value = '';
    machin = Math.floor((Math.random(1, 99))*100+1);
    console.log(machin);
    // letsPlay();

}
// }