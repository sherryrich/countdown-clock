const countdown = () => {
    const countDate = new Date(" Dec 31, 2081 00:00:00").getTime();
   const now = new Date().getTime(0);
   const gap = countDate - now;

   //How does time work?
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

    //calc
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day / hour))
    const textMinute = Math.floor((gap % day / minute)) 
    const textSecond = Math.floor((gap % day / second)) 
    console.log(textDay);
    console.log(textHour);
    console.log(textMinute);
    console.log(textSecond);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);