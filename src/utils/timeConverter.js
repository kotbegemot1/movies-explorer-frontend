function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}ч ${padTo2Digits(minutes)}м`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export default toHoursAndMinutes;