// Link Button Handler //


const telegram_btn = document.getElementById("telegram_btn");
const discord_btn = document.getElementById("discord_btn");
const github_btn = document.getElementById("github_btn");



function OpenLink(options) {
  switch (options) {
    case "telegram":
      window
        .open("https://t.me/cnox_lof", "_blank")
        .focus();
      break;
    case "discord":
      window
        .open("https://discordapp.com/users/847095866836647974", "_blank")
        .focus();
      break;
    case "github":
      window
        .open("https://github.com/cnoxlof", "_blank")
        .focus();
      break;
  }
}

// Badge Popup Handler //
const popup = document.getElementById('badgePopup')

const badge1 = document.getElementById("badge1");
const badge2 = document.getElementById("badge2");
const badge3 = document.getElementById("badge3");
const badges = [badge1, badge2, badge3];

var popupText = [
  "A Software Developer writes code to create software applications. They turn ideas into programs that people can use on computers, phones, or the web.",
  "A Bot Developer builds automated programs (bots) that can perform tasks on their own, like answering questions in a chat or automating repetitive work.",
  "A Full-Stack Developer works on both the front-end (what users see) and back-end (the behind-the-scenes) parts of a website or app, making sure everything works smoothly together."
]

function handleMouseEnter(e, index) {

  ShowPopup(e, index);
}
function handleMouseLeave() {
  popup.className = 'badgePopup hide';
}
badges.forEach((badge, index) => {
  badge.addEventListener('mouseenter', (e) => handleMouseEnter(e, index));
  badge.addEventListener('mouseleave', handleMouseLeave);
});

function ShowPopup(e,badgeNum) {
  
  popup.style.display = ''
  popup.className = 'badgePopup'
  popup.textContent = popupText[badgeNum];

  var rect = e.target.getBoundingClientRect();

  var middle = popup.getBoundingClientRect();
  middleX = middle.left - middle.right
  middleY = rect.top + (rect.bottom - rect.top) 

  popup.style.top = middleY  + 'px';
  

  if (window.innerWidth < 530){
    popup.style.left = window.innerWidth/2 + middleX/2  + 'px';
  }else {
    popup.style.left = rect.right - (rect.right - rect.left)/2 + middleX/2 + 'px';
  }
}



// Stars Background Handler //



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



if (window.innerHeight < window.innerWidth) {
  canvas.width = canvas.height = window.innerWidth;
}else {
  canvas.width = canvas.height = window.innerHeight;
}






function drawStars() {
  const starCount = 9999; // Adjust this for more or fewer stars
  for (var i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2; // Star size
    const gray = Math.random() * 255; // Random grayscale color

    ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
    ctx.fillRect(x, y, size, size);
  }
}

drawStars();



// Responsive Scroll Iphone Disable //

/mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function() {
  window.scrollTo(0, 1);
}, 1000);​



window.addEventListener("scroll", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
