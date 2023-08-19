function openCity(evt, cityName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  tabcontent.forEach((tab) => {
    tab.style.display = "none";
  });

  tablinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(cityName).style.display = "block";

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
}
  
  openCity(null, "Overview");
  