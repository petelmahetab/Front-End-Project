// 1 Random Color Generator

const randomColor=function(){
    const hex='0123456789ABCDEF';
     let colorID='#';

    //  itrate on Hex length 6 why . length of any color will be 6 digit
    for(let i=0;i<6;i++){
        colorID+=hex[Math.floor(Math.random()*16)];
    }
    return colorID;
}
// 2 select both button and apply Listener
const startButton=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
let intervalID;
function startGeneratingColors(){
// set Interval
     if(!intervalID){
       intervalID=setInterval(starts,1000);
     }
     function starts(){
       document.body.style.backgroundColor=randomColor();
     }
}
startButton.addEventListener('click',startGeneratingColors)

function stopGeneratingColors(){
    // Clear the interval or stop them
    clearInterval(intervalID);
    intervalID=null;
}
stopButton.addEventListener('click',stopGeneratingColors)