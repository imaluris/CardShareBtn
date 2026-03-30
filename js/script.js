const footerAvatar = document.querySelector(".share-not-clicked");
const footerSocials = document.querySelector(".share-clicked");
const shareAvatar = document.querySelector(".right-group");
const shareSocials = document.querySelector(".right-group-clicked");

function isMobile() {
  return window.innerWidth <= 768;
}

// click sul bottone principale
shareAvatar.addEventListener("click", (e) => {
  e.preventDefault();

  if (isMobile()) {
    // mobile → sostituisce footer
    footerAvatar.classList.add("hidden");
    footerSocials.classList.remove("hidden");
  } else {
    // desktop → toggle vignetta
    footerSocials.classList.toggle("hidden");
    shareAvatar.classList.toggle("active");
  }
});

// click sul bottone dentro la barra (per tornare indietro)
shareSocials.addEventListener("click", (e) => {
  e.preventDefault();

  if (isMobile()) {
    footerSocials.classList.add("hidden");
    footerAvatar.classList.remove("hidden");
  } else {
    footerSocials.classList.add("hidden");
  }
});