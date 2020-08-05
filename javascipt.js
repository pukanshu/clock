function clock(){
const date = new Date();
console.log(date);
const hour = date.getHours()*30;
console.log(hour);
const minutes = date.getMinutes()*6;
console.log(minutes);
const second = date.getSeconds()*6;
console.log(second);


document.getElementById('hr').style.transform = `rotate(${hour}deg)`;
document.getElementById('mn').style.transform = `rotate(${minutes}deg)`;
document.getElementById('sec').style.transform = `rotate(${second}deg)`;
}

var test = setInterval(clock, 1000);

function watch(){
    const dat = new Date();
    console.log(dat);
    let hours = dat.getHours();
    let pm='pm';
    if(hours < 12) {
        pm = 'am';
     }
    if (hours > 12) {
        hours = hours - 12;
      }    
      if(hours==0){ 
        hours=12;
      }
      if (hours < 10) {
        hours = "0" + hours;
    }
    console.log(hours);

    let minute = dat.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    console.log(minute);

    let secon = dat.getSeconds();
    if (secon < 10) {
        secon = "0" + secon;
    }
    console.log(secon);


    
    const day = dat.getDay();
    console.log(day);
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let week = {'Sun':'SUN','Mon':'MON','Tue':'TUE','Wed':'WED','Thu':'THU','Fri':'FRI','Sat':'SAT'};

    
    for (var i = 0; i <days.length; i++) {
        let num = days[i];

        console.log(num);
        console.log(week[num]);
        
    };
    document.getElementById(week[num]).style.backgroundColor="#35fcfcf2";
    /*

    const month = dat.getMonth();
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    console.log(month);
*/


    document.getElementById('number1').innerHTML = hours;
    document.getElementById('number2').innerHTML = minute;
    document.getElementById('number3').innerHTML = secon;
   /* document.getElementById('day').innerHTML =days[day];
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('ampm').innerHTML = pm;
    */
}

var turn = setInterval(watch, 1000);



