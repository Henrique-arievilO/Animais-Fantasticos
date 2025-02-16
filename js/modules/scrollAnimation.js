export default function scrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  
  if(sections.length){
    const halfWindow = window.innerHeight * 0.75;
    
    function animateScrolling() {
      sections.forEach((section) => {
        const topSection = section.getBoundingClientRect().top;
        const sectionVisible = (topSection - halfWindow) < 0;
        if(sectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        };
      })
    }
    animateScrolling();
    
    window.addEventListener('scroll', animateScrolling)
  }
}