var typing=new Typed(".text", { //typing thingy at about me
       strings: ["", "Fullstack Developer","Python Developer", "Node Developer", "Web Developer", "Discord bot Developer", "Web Designer", "Human", "Programmer", "Minecraft plugin developer", "Robot (yes, I'm a robot:)"],
       typeSpeed: 100,
       backSpeed: 40,
       loop: true,
   });
document.getElementById("year").innerHTML = new Date().getFullYear(); //auto updates copyright year
;

function bouncy() {
  setTimeout(function() { 
    document.getElementById("pfp").classList.add('bounceNOW');
  }, 500);
  setTimeout(function() { 
    document.getElementById("pfp").src = "assets/pfp.jpeg"
  }, 1900);
  setTimeout(function() { 
    document.getElementById("pfp").classList.remove('bounceNOW');
     //document.getElementById("blob").style.display = "block";
  }, 2200);

}

function toggleimg() {
  var img = document.getElementById('pfp').src;
  if (img.indexOf('assets/pfp.jpeg')!=-1) {
    document.getElementById('pfp').src  = 'assets/raadsel-empty.svg';
    document.body.style.backgroundColor  = `#2c2626`
    document.body.style.color = `#d3c3c3;`
    document.body.style.color = `#fff;`
    const elements = document.getElementsByClassName("large");
    if (elements.length > 0) {
      elements[0].style.color = "#cfdbff";
    }
    document.getElementById("Raadsel").style.backgroundImage = "url('https://media.tenor.com/wngVe_Erkh8AAAAd/blue-white.gif')";

    let middle = document.getElementsByClassName("middle");
    for(let i = 0; i < middle.length; i++) {
      middle[i].style.color = "#cfdbff";
    }
    let contentBars = document.getElementsByClassName("content-bar");
    for (let i = 0; i < contentBars.length; i++) {
      contentBars[i].style.backgroundColor = "#302c2c";
      contentBars[i].style.color = "#e4d9d9";
    }
  } 
  else {
    document.getElementById('pfp').src = 'assets/pfp.jpeg';
    document.body.style.backgroundColor  = `#fff`
    document.body.style.color = `#000;`
    const elements = document.getElementsByClassName("large");
    if (elements.length > 0) {
      elements[0].style.color = "#3e3f42";
    }
    document.getElementById("Raadsel").style.backgroundImage = `url('https://media0.giphy.com/media/l0HlLoOWBZh2YIn7i/giphy.gif')`
    let middle = document.getElementsByClassName("middle");
    for(let i = 0; i < middle.length; i++) {
      middle[i].style.color = "#3e3f42";
    }
    let contentBars = document.getElementsByClassName("content-bar");
    for (let i = 0; i < contentBars.length; i++) {
      contentBars[i].style.backgroundColor = "#F5F5F5";
      contentBars[i].style.color = "#333333";
    }
 }
}
//A developer animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
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

//when tab is clicked away
document.addEventListener('visibilitychange', function(e) {
  var isPageActive = !document.hidden;

  if(!isPageActive){
    document.querySelector(`link[rel="icon"]`).href = "/assets/raadsel-empty.svg";
    document.title = 'Thanks for visiting! - Raadsel';
  } else {
    document.querySelector(`link[rel="icon"]`).href = "/assets/raadsel.svg";
    document.title = 'Raadsel - Jorik Loos';
  }
});

//blob
const blob = document.getElementById("blob");
window.onpointermove = event => { 
  const { clientX, clientY } = event;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

bouncy()
console.log("JS loaded!")