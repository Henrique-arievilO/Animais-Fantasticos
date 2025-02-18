export default function operation () {
  const openingHours = document.querySelector('[data-week]');
  const weekDays = openingHours.dataset.week.split(',').map(Number);
  const weekHours = openingHours.dataset.hours.split(',').map(Number);
  const dateNow = new Date();
  const today = dateNow.getDay();
  const hourNow = dateNow.getHours();
  const openDay = weekDays.indexOf(today) !== -1;
  const openHour = (hourNow >= weekHours[0] && hourNow < weekHours[1]);
  
  if(openDay && openHour) {
    openingHours.classList.add('open');
  }else{
    openingHours.classList.add('close');
  } 
}