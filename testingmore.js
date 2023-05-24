function startTimer() {
    if (isTimerRunning === false) {
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 10);
      isTimerRunning = true;
    }
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
  }
  
  function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    //The following 4 lines of code where conducted by the help og ChatGPT
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    console.log(
      `Elapsed time: ${minutes}:${pad(seconds, 2)}:${pad(milliseconds, 3)}`
      
    );
    const formattedTime = `${minutes}:${pad(seconds, 2)}:${pad(milliseconds, 3)}`;
  console.log(`Elapsed time: ${formattedTime}`);

  // Store elapsed time in localStorage
  localStorage.setItem('elapsedTime', formattedTime);
  }
  //The following 3 lines of code where conducted by the help og ChatGPT
  function pad(number, length) {
    return number.toString().padStart(length, "0");
  }

  console.log(localStorage.getItem());