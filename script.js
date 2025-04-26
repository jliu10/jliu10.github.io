const animateOnScroll = () => {
    console.log("animateOnScroll");
    const elements = document.querySelectorAll('.fade-slide-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible
  
    elements.forEach(el => observer.observe(el));
};


const music = document.querySelector('audio');
if (music) {
  music.volume = .5
}
  
// Run on load and when new content is added (e.g., SPAs)
window.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('load', animateOnScroll);

console.log("JavaScript");