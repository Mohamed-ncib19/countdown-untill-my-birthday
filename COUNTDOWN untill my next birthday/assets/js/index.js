time = "00:00:00"

let countDD=new Date("sep 18 , 2023 00:00:00").getTime();

let display=()=>{
    document.getElementById('demo').innerText=time
    currentDate = new Date().getTime();

    restOfTime = countDD - currentDate;

    var days = Math.floor(restOfTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((restOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((restOfTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((restOfTime % (1000 * 60)) / 1000);
    
    //display
    document.getElementById('demo').innerHTML=days+" days "+hours+"h "+minutes+"m "+seconds+" sec";
}

setInterval(display, 0);
