// Image-related variables
const images = [
  "cat-0.jpg", "cat-1.jpg", "cat-2.jpg", "cat-3.jpg", "cat-4.jpg", "cat-5.jpg"
];
let currentImage = 0;
const img = document.getElementById("myImg");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const folderPath = "image/";

// Heart emojis content
const heartContents = [
  "❤️", "🥰", "😍", "💝", "😘", "❣️", "💕", "💓"
];

// Function to create falling hearts effect
function createHearts() {
  const heartsContainer = document.getElementById("hearts-container");

  // Increase frequency of hearts
  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");

    // Randomly pick content from the heartContents array
    const randomContent = heartContents[Math.floor(Math.random() * heartContents.length)];
    heart.setAttribute("data-content", randomContent);

    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random fall speed

    heartsContainer.appendChild(heart);

    // Set the content for the heart
    heart.innerHTML = `<span class="heart-content">${randomContent}</span>`;

    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove heart after animation
  }, 100); // Reduced interval time for more frequent hearts
}


// Function to handle "No" button click
let count = 0;
function no() {
  currentImage = (currentImage + 1) % images.length;
  img.src = folderPath + images[currentImage];
  let buttonTxt = document.getElementById("noBtn");
  if(count === 0){
    buttonTxt.textContent = 'Are you sure?';
    count++;
  } else if(count === 1) {
    buttonTxt.textContent = 'Bubu Please';
    count++;
  }else if(count === 2) {
    buttonTxt.textContent ="Don't do this to me :(";
    count++;
  } else if(count === 3) {
    buttonTxt.textContent = "You're breaking my heart";
    count ++;
  } else if(count === 4) {
    buttonTxt.textContent = "I'm gonna cry..";
    count = 0;
  }
  

  // Increase Yes button size & shrink No button
  let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);

  yesBtn.style.fontSize = (yesSize + 20) + "px";
  noBtn.style.fontSize = (noSize - 1) + "px";
}

// Function to handle "Yes" button click
function yes() {
  count = 0;
  img.src = folderPath + "cat-yes.jpg"; 

  // Remove No button
  noBtn.style.display = "none";

  // Change text
  document.getElementById('message').innerHTML = "I’m so lucky to have you as my Valentine! 💘";

  // Start heart effect
  createHearts();
}

