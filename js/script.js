const myBirthDay = "23 Oct 2023";
const daysText = document.querySelector("#days"),
  hoursText = document.querySelector("#hours"),
  minutesText = document.querySelector("#minutes"),
  secondsText = document.querySelector("#seconds");

function countdown() {
  const myBirthDayDate = new Date(myBirthDay);
  const currentData = new Date();
  console.log(currentData);
  const difference = myBirthDayDate - currentData;
  const days = Math.floor(difference / (1000 * 3600 * 24));
  const hours = Math.floor(
    (difference - days * 1000 * 3600 * 24) / (1000 * 3600)
  );
  const minutes = Math.floor(
    (difference - days * 1000 * 3600 * 24 - hours * 1000 * 3600) / (1000 * 60)
  );
  const seconds = Math.floor(
    (difference -
      days * 1000 * 3600 * 24 -
      hours * 1000 * 3600 -
      minutes * 1000 * 60) /
      1000
  );
  daysText.textContent = days;
  hoursText.textContent = hours;
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;

  console.log(days, hours, minutes, seconds);
}

// countdown();

setInterval(countdown, 1000);
