const typing = new Typed(".text", {
  //typing thingy at about me
  strings: [
    "",
    "Fullstack Developer",
    "Python Developer",
    "Node Developer",
    "Web Developer",
    "Discord bot Developer",
    "Web Designer",
    "Human",
    "Programmer",
    "Minecraft plugin developer",
    "Student",
  ],
  typeSpeed: 250,
  backSpeed: 40,
  loop: true,
});
//                                                 TIME                                                     //
document.getElementById("year").innerHTML = new Date().getFullYear(); //auto updates copyright year
const currentDate = new Date();
// calculate age
let age = currentDate.getFullYear() - 2008;
if (currentDate.getMonth() < 7) {
  age--; // birthday hasn't passed yet this year
}
document.getElementById("age").innerHTML = age;

function updateTime() {
  const date = new Date();
  const amsterdamTime = date.toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: 'Europe/Amsterdam',
  });
  const hour = date.getHours();
  let optionalText = ``;
  if (hour < 8 || hour > 22) {
    optionalText = 'But I\'m probably sleeping now.';
  } else {
    optionalText = 'And I\'m probably awake!';
  }
  document
    .getElementById("time")
    .setAttribute(
      "data-tooltip",
      `So my current time is ${amsterdamTime}. ${optionalText}`
    );
}

// Update the time every second
setInterval(updateTime, 1000);

function bouncy() {
  setTimeout(function () {
    document.getElementById("pfp").classList.add("bounceNOW");
  }, 500);
  setTimeout(function () {
    document.getElementById("pfp").src = "assets/pfp.jpeg";
  }, 1900);
  setTimeout(function () {
    document.getElementById("pfp").classList.remove("bounceNOW");
    //document.getElementById("blob").style.display = "block";
  }, 2200);
}

function toggleimg() {
  const img = document.getElementById("pfp").src;
  if (img.indexOf("assets/pfp.jpeg") != -1) {
    document.getElementById("pfp").src = "assets/raadsel-empty.svg";
    document.body.style.backgroundColor = `#2c2626`;
    document.body.style.color = `#d3c3c3;`;
    document.body.style.color = `#fff;`;
    const elements = document.getElementsByClassName("large");
    if (elements.length > 0) {
      elements[0].style.color = "#cfdbff";
    }

    let middle = document.getElementsByClassName("middle");
    for (let i = 0; i < middle.length; i++) {
      middle[i].style.color = "#cfdbff";
    }
    let contentBars = document.getElementsByClassName("content-bar");
    for (let i = 0; i < contentBars.length; i++) {
      contentBars[i].style.backgroundColor = "#302c2c";
      contentBars[i].style.color = "#e4d9d9";
    }
    document.querySelector('.r').style.color = "#9b5de5";
    document.querySelector('.a').style.color = "#f15bb5";
    document.querySelector('.a2').style.color = "#00bbf9";
    document.querySelector('.d').style.color = "#ffbb00";
    document.querySelector('.s').style.color = "#00f5d4";
    document.querySelector('.e').style.color = "#6200f5";
    document.querySelector('.l').style.color = "#ff006f";
    document.querySelector('.outline').style.color = "#ffc524";
  } else {
    document.getElementById("pfp").src = "assets/pfp.jpeg";
    document.body.style.backgroundColor = `#fff`;
    document.body.style.color = `#000;`;
    const elements = document.getElementsByClassName("large");
    if (elements.length > 0) {
      elements[0].style.color = "#3e3f42";
    }

    let middle = document.getElementsByClassName("middle");
    for (let i = 0; i < middle.length; i++) {
      middle[i].style.color = "#3e3f42";
    }
    let contentBars = document.getElementsByClassName("content-bar");
    for (let i = 0; i < contentBars.length; i++) {
      contentBars[i].style.backgroundColor = "#F5F5F5";
      contentBars[i].style.color = "#333333";
    }
    document.querySelector('.r').style.color = "#6600cc";
    document.querySelector('.a').style.color = "#cc0099";
    document.querySelector('.a2').style.color = "#0066cc";
    document.querySelector('.d').style.color = "#D17D00";
    document.querySelector('.s').style.color = "#009966";
    document.querySelector('.e').style.color = "#6600cc";
    document.querySelector('.l').style.color = "#cc0066";
    document.querySelector('.outline').style.color = "#8C00B3";
  }
}
//A developer animation
const letters = "BCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector("h2").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 5);
};

//when tab is clicked away
document.addEventListener("visibilitychange", function (e) {
  const isPageActive = !document.hidden;
  if (!isPageActive) {
    document.querySelector(`link[rel="icon"]`).href =
      "/assets/raadsel-empty.svg";
    document.title = "Thanks for visiting!";
  } else {
    document.querySelector(`link[rel="icon"]`).href = "/assets/raadsel.svg";
    document.title = "Raadsel - Jorik";
  }
});

//blob
const blob = document.getElementById("blob");
window.onpointermove = (event) => {
  const { clientX, clientY } = event;
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

//modal
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("open-modal-btn");
  const modal = document.getElementById("skills-modal");
  const closeBtn = document.querySelector(".skills-close");
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block"; // Show modal when button is clicked
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal when close button is clicked
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none"; // Hide modal when user clicks outside of it
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".card__background"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.backgroundImage = 'url(' + entry.target.getAttribute('data-src') + ')';
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

let index = 0,interval2 = 1000;const rand = (min, max) =>Math.floor(Math.random() * (max - min + 1)) + min;const animate = star => {star.style.setProperty("--star-left", `${rand(-10, 100)}%`);star.style.setProperty("--star-top", `${rand(-40, 80)}%`);star.style.animation = "none";star.offsetHeight;star.style.animation = ""};for(const star of document.getElementsByClassName("magic-star")) {setTimeout(() => {animate(star);setInterval(() => animate(star), 1000);}, index++ * (interval2 / 3))} //cool effect
bouncy();
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleimg()
}