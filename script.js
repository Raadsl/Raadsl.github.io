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
    document.getElementById("pfp").src = "images/pfp.jpeg"
}, 2500);
  setTimeout(function() { 
     document.getElementById("pfp").classList.remove('bounceNOW');
     //document.getElementById("blob").style.display = "block";
}, 3000);

}

function toggleimg() {
  var img = document.getElementById('pfp').src;
  if (img.indexOf('images/pfp.jpeg')!=-1) {
      document.getElementById('pfp').src  = 'images/raadsel-empty.svg';
  } 
   else {
     document.getElementById('pfp').src = 'images/pfp.jpeg';
 }

}


//A developer animation
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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let interval1 = null;

document.querySelector("h2").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 20);
}

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration += 1 / 3;
  }, 20);
}

// onfocus title change
window.onblur = function() {
  document.querySelector(`link[rel="icon"]`).href = "/images/raadsel-empty.svg";
  document.title = 'Thanks for visiting! - Raadsel';
    
}
window.onfocus = function() {
  document.querySelector(`link[rel="icon"]`).href = "/images/raadsel.svg";
  document.title = 'Raadsel - Jorik Loos';
  
}
bouncy()

//blob
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

