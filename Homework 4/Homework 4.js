function numbersInterval() {
    let i = 5;
    let time = setInterval(function() {
      console.log(i);
      if (i == 15) clearInterval(time);
      i++;
    }, 1000);
  }
  
numbersInterval();