export default function animaNumbers () {
  function animationNumber () {
    const numbers = document.querySelectorAll('[data-number]');
  
    numbers.forEach((number) => {
      const total = + number.innerText;
      const increase = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + increase;
        number.innerText = start;
        if(start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation (mutation) {
    if(mutation[0].target.classList.contains('active')) {
      watcher.disconnect();
      animationNumber();
    }
  }
  const observeTarget = document.querySelector('.numbers');
  const watcher = new MutationObserver(handleMutation); 
  watcher.observe(observeTarget, {attributes: true} );
}

