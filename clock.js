function clockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes= date.getMinutes();
    let seconds = date.getSeconds();


    if(hours<10){
        hours='0'+hours;
    }
    if(minutes<10){
        minutes='0'+minutes
    }
    if(seconds<10){
        seconds='0'+seconds
    }

    if(hours>12){
        hours=hours-12;
        let am =document.getElementById('AM');
        am.innerText='PM'
        }
        else{
            let am =document.getElementById('AM');
            am.innerText='AM'
        }

    
    
    
if(hours>1 && hours<4)
{
   let wishes = document.getElementById('wishes');
   wishes.innerText='GOOD AFTERNOON TAKE SOME SLEEP';
}
else
{
if(hours>4 && hours<9)
{
   let wishes = document.getElementById('wishes');
   wishes.innerText='GOOD EVENING';
}
else{


if(hours>9 && hours<6)
{
   let wishes = document.getElementById('wishes');
   wishes.innerText='GOOD NIGHT';
}
}
}

if(hours>6 && hours<12)
{
   let wishes = document.getElementById('wishes');
   wishes.innerText='GOOD AFTERNOON TAKE SOME SLEEP';
}





let hrs =document.getElementById('hrs');
hrs.innerText = hours;
let mins = document.getElementById('mins');
mins.innerText = minutes;
let secs = document.getElementById('secs');
secs.innerText = seconds;
    


console.log (hours, minutes, seconds);
}


let date = new Date();
let hours = date.getHours();
let minutes= date.getMinutes();
let seconds = date.getSeconds();





setInterval(()=>{
    clockStart();   
},1000)


let alarmbtn = document.getElementById('btn');


    function execute()
    {

        let date = new Date();
        let hours = date.getHours();
        let minutes= date.getMinutes();
        let seconds = date.getSeconds();
        let img1=document.getElementById('image1');
        img1.style.display='none';

        let firstdropdown=document.getElementById('timeselect1');
        let value1=firstdropdown.value;
        console.log(value1);
        let wakeuptiming=document.getElementById('wakeuptiming')
        wakeuptiming.innerText='Wake up Time :'+' '+ value1;


        let seconddropdown=document.getElementById('timeselect2');
        let value2=seconddropdown.value;
        console.log(value2);
        let lunchtiming=document.getElementById('Lunchtiming')
        lunchtiming.innerText='Lunch Time :'+' '+ value2;


        let thirddropdown=document.getElementById('timeselect3');
        let value3=thirddropdown.value;
        console.log(value3);
        let naptiming=document.getElementById('Naptiming')
        naptiming.innerText='Nap Time :'+' '+ value3;


        let fourthdropdown=document.getElementById('timeselect4');
        let value4=fourthdropdown.value;
        console.log(value4);
        let nighttiming=document.getElementById('nighttiming')
        nighttiming.innerText='Night Time :'+' '+ value4;
        
       //let a=document.getElementsByClassName('timeselect1');
      let hourstxt=hours.toString();
       console.log(hourstxt)

    let advice = document.getElementById('advice')
    
       if(value1[0]==hourstxt[0] && value1[1]== hourstxt[1]){
        advice.innerText = 'GRAB SOME HEALTHY BREAKFAST!!'
        console.log(advice);
        let img=documnet.getElementById('image');
        img.style.backgroundImage='./media/wake_up.jpg'
        

       }
       else{
        if(value2[0]==hourstxt[0]&& value2[1]==hourstxt[1]){
            advice.innerText = 'LETS HAVE SOME LUNCH!!';
            let img=document.getElementById('image');
            img.style.backgroundImage="url('./media/Group1.jpg')"
        }
        else{
            if(value3[0]==hourstxt[0]&& value3[1]==hourstxt[1]){
                advice.innerText = 'STOP YAWNING, GET SOME TEA..ITS JUST A EVENING'
                console.log(advice);
                let img=document.getElementById('image');
            img.style.backgroundImage="url('./media/lunch_image.jpg')"
            }
            else{
                if(value4[0]==hourstxt[0]&& value4[1]==hourstxt[1]){
                    advice.innerText = 'CLOSE YOUR EYES AND GO TO SLEEP';
                    let img=document.getElementById('image');
            img.style.backgroundImage="url('./media/goodnight_image.jpg')"
                }
            }
        }
       }
        
}

