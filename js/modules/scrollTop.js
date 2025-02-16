export default function scrollTop() {
  const topButton = document.querySelector('[data-button="top"]');

  function showButton () {
    if(window.innerHeight <= 0) {
      topButton.classList.remove('active');
    }else{
      topButton.classList.add('active');
    }
  }
  document.addEventListener('scroll', showButton);

  
  function hideButton (event) {
    if (event.deltaY < 0) {
      var topButton = document.querySelector('[data-button="top"]');
      topButton.classList.remove('active');
    }
  }
  document.addEventListener('wheel', hideButton);
  function backToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  topButton.addEventListener('click', backToTheTop);
}