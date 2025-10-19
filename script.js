function openSideBar() {
  document.getElementById("sideBar").classList.remove("collapsed");
  document.getElementById("overlay").classList.remove("hidden");
}

function closeSideBar() {
  document.getElementById("sideBar").classList.add("collapsed");
  document.getElementById("overlay").classList.add("hidden");
}
