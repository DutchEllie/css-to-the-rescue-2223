// Actually not really allowed to use JS, but this is just for fun
// This just sets some radio buttons for preference of handedness

const preferredHandedness = window.localStorage.getItem("preferred_handedness");
const preferenceButtonLeft = document.querySelector('nav input[value="left"]');
const preferenceButtonRight = document.querySelector('nav input[value="right"]');

// Run this before we set the radiobutton with the handedness.
preferenceButtonLeft.addEventListener('click', () => {
  window.localStorage.setItem("preferred_handedness", "left");
})
preferenceButtonRight.addEventListener('click', () => {
  window.localStorage.setItem("preferred_handedness", "right");
})

if(preferredHandedness == "" || preferredHandedness === null) {
  window.localStorage.setItem("preferred_handedness", "no-preference");
}

switch(preferredHandedness) {
  case "left":
  case "no-preference":
    preferenceButtonLeft.checked = true;
    break;
  case "right":
    preferenceButtonRight.checked = true;
    break;
}