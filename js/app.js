// DOM elements
const countdown = document.querySelector('.countdown');
const daysLabel = document.querySelector('.days');
const hoursLabel = document.querySelector('.hours');
const minutesLabel = document.querySelector('.minutes');
const secondsLabel = document.querySelector('.seconds');

// Enums
const MILLISECONDS_IN_A_SECOND = 1000;
const MILLISECONDS_IN_A_MINUTE = MILLISECONDS_IN_A_SECOND * 60;
const MILLISECONDS_IN_AN_HOUR = MILLISECONDS_IN_A_MINUTE * 60;
const MILLISECONDS_IN_A_DAY = MILLISECONDS_IN_AN_HOUR * 24;
const SECOND = 1000;

/**
 * Return a 2-digit number.
 *
 * @param {Number} number
 */
function formatTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}

/**
 * Transform milliseconds to days, hours, minutes and seconds.
 *
 * @param {Number} milliseconds
 */
function transformMilliseconds(milliseconds) {
  const days = parseInt(milliseconds / MILLISECONDS_IN_A_DAY);
  const msMinusDays = milliseconds % MILLISECONDS_IN_A_DAY;
  const hours = parseInt(msMinusDays / MILLISECONDS_IN_AN_HOUR);
  const msMinusHours = msMinusDays % MILLISECONDS_IN_AN_HOUR;
  const minutes = parseInt(msMinusHours / MILLISECONDS_IN_A_MINUTE);
  const msMinusMinutes = msMinusHours % MILLISECONDS_IN_A_MINUTE;
  const seconds = parseInt(msMinusMinutes / MILLISECONDS_IN_A_SECOND);

  daysLabel.textContent = formatTwoDigits(days);
  hoursLabel.textContent = formatTwoDigits(hours);
  minutesLabel.textContent = formatTwoDigits(minutes);
  secondsLabel.textContent = formatTwoDigits(seconds);
}

/**
 * Calculate missing days, minutes, hours and seconds
 * until the first day of next year.
 */
function calculateDiff() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const firstDayNextYear = new Date(nextYear, 0, 1, 0, 0, 0, 0);
  const diffMilliseconds = firstDayNextYear - now;
  transformMilliseconds(diffMilliseconds);
}

setInterval(calculateDiff, SECOND);
