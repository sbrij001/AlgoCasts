// common interview question

// create a function to fill the bar
function fillBar(seconds){
  const bar = document.querySelector(.bar);
  // every x amount of seconds run a function
  let atPercent = 0;
  const interval = setInterval(function () {
    atPercent ++;
    bar.style.width = atPercent + '%';
    // will check if the progress bar has reached 100 & reset it;
    if (atPercent >= 100) {
      clearInterval(interval)
    }
  }, (seconds * 1000) / 100);
  // seconds times 1000 => converts it to milliseconds
  // divided 100 makes it 1 percent
}
