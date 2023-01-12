var typing=new Typed(".text", { //typing thingy at about me
       strings: ["", "Fullstack Developer","Python Developer", "Node Developer", "Web Developer", "Discord bot Developer", "Web Designer", "Human", "Programmer", "Minecraft plugin developer", "Robot (yes, I'm a robot:)"],
       typeSpeed: 100,
       backSpeed: 40,
       loop: true,
   });

document.getElementById("year").innerHTML = new Date().getFullYear(); //auto updates copyright year

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function bouncy() {
  setTimeout(function() { 
     document.getElementById("pfp").classList.add('bounceNOW');
}, 500);
  setTimeout(function() { 
     document.getElementById("pfp").classList.remove('bounceNOW');
}, 2500);
  setTimeout(function() { 
     document.getElementById("Raadsel").classList.add('rise');
}, 2500);
}


const slides = document.querySelectorAll('.slide')
const clearActives = () => {
  slides.forEach(slide => slide.classList.remove('active'))
}
const setActive = (e) => {
  clearActives()
  e.target.classList.add('active')
}
slides.forEach(slide => {
  slide.addEventListener('click', setActive)
})