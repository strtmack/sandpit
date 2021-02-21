let teamLinks = document.querySelectorAll(".team-filter");

function getStaff() {
  let xhttp = new XMLHttpRequest();
  xhttp.responseType = "json";
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = this.response;

      document.querySelector(".staff-profiles").innerHTML = "";

      for (let i = 0; i < response.length; i++) {
        // Create profile card
        let staffCard = document.createElement("div");
        staffCard.classList.add("staff-card");
        // Add avatar
        let avatar = document.createElement("img");
        avatar.classList.add("staff-img");
        avatar.src = response[i].avatar;
        // Add name
        let name = document.createElement("h4");
        name.classList.add("staff-name");
        name.innerHTML = response[i].name;
        // Add title
        let title = document.createElement("p");
        title.classList.add("staff-title");
        title.innerHTML = response[i].title;
        // Add Department
        let team = document.createElement("p");
        team.classList.add("staff-title");
        team.innerHTML = response[i].team + " team";
        // Add email
        let email = document.createElement("A");
        email.classList.add("staff-email");
        email.href = `mailto:${response[i].email}`;
        email.innerHTML = response[i].email;

        // Event listeners for hover on card elements
        staffCard.addEventListener("mouseenter", (e) => {
          e.currentTarget.classList.add("selected");
        });

        staffCard.addEventListener("mouseleave", (e) => {
          e.currentTarget.classList.remove("selected");
        });

        staffCard.append(avatar);
        staffCard.append(name);
        staffCard.append(title);
        staffCard.append(team);
        staffCard.append(email);
        document.querySelector(".staff-profiles").append(staffCard);
      }

      // Animate cards in
      anime({
        targets: ".staff-card",
        opacity: 1,
        translateY: -20,
        duration: 900,
        delay: anime.stagger(100),
        direction: "normal",
        easing: "easeInOutSine",
      });
    }
  };
  xhttp.open("GET", "staff.php", true);
  xhttp.send();
}

// Filtered AJAX - teams
let getTeam = (e) => {
  let http = new XMLHttpRequest();
  http.responseType = "json";
  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = this.response;

      document.querySelector(".staff-profiles").innerHTML = "";

      for (let j = 0; j < response.length; j++) {
        if (response[j].team === e.target.dataset.team) {
          // Create profile card
          let staffCard = document.createElement("div");
          staffCard.classList.add("staff-card");
          // Add avatar
          let avatar = document.createElement("img");
          avatar.classList.add("staff-img");
          avatar.src = response[j].avatar;
          // Add name
          let name = document.createElement("h4");
          name.classList.add("staff-name");
          name.innerHTML = response[j].name;
          // Add title
          let title = document.createElement("p");
          title.classList.add("staff-title");
          title.innerHTML = response[j].title;
          // Add Department
          let team = document.createElement("p");
          team.classList.add("staff-title");
          team.innerHTML = response[j].team + " team";
          // Add email
          let email = document.createElement("A");
          email.classList.add("staff-email");
          email.href = `mailto:${response[j].email}`;
          email.innerHTML = response[j].email;

          staffCard.addEventListener("mouseenter", (e) => {
            e.currentTarget.classList.add("selected");
          });

          staffCard.addEventListener("mouseleave", (e) => {
            e.currentTarget.classList.remove("selected");
          });

          staffCard.append(avatar);
          staffCard.append(name);
          staffCard.append(title);
          staffCard.append(team);
          staffCard.append(email);
          document.querySelector(".staff-profiles").append(staffCard);
        }
        // Animate cards in
        anime({
          targets: ".staff-card",
          opacity: 1,
          translateY: -20,
          duration: 900,
          delay: anime.stagger(100),
          direction: "normal",
          easing: "easeInOutSine",
        });
      }
    }
  };
  http.open("GET", "staff.php", true);
  http.send();
};

// Add department filter to department links
for (let k = 0; k < teamLinks.length; k++) {
  teamLinks[k].addEventListener("click", (e) => {
    getTeam(e);
  });
}

document.querySelector(".teams-all").addEventListener("click", () => {
  getStaff();
});

// Scroll wheel element
let scrollRotate = () => {
  let wheel = document.querySelector(".scroll");
  wheel.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
};

window.onscroll = () => {
  scrollRotate();
};

// Animations
anime({
  targets: ".header-el",
  opacity: 1,
  duration: 1400,
  translateY: 10,
  delay: anime.stagger(240),
  direction: "normal",
  easing: "easeInOutSine",
});

anime({
  targets: ".canvas",
  opacity: 1,
  duration: 2000,
  easing: "easeInOutSine",
});

anime({
  targets: ".scroll",
  opacity: 1,
  duration: 1400,
  easing: "easeInOutSine",
  delay: 500,
});

anime({
  targets: ".footer-el",
  opacity: 1,
  duration: 1800,
  easing: "easeInOutSine",
  delay: 1200,
});

anime({
  targets: "#canvas3d",
  opacity: 1,
  duration: 1800,
  easing: "easeInOutSine",
  delay: 1600,
});

// Handle window resize canvas
addEventListener("resize", () => {
  anime({
    targets: ".canvas",
    opacity: 1,
    duration: 2000,
    easing: "easeInOutSine",
  });
});

// Canvas parallax scroll
window.addEventListener("scroll", () => {
  let scrolled = window.pageYOffset;
  const background = document.querySelector(".canvas");
  background.style.top = -(scrolled * 0.4) + "px";
});

getStaff();
